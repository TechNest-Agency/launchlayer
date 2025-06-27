const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Import models and services
const Order = require('../models/Order');
const Transaction = require('../models/Transaction');
const PaymentGatewayService = require('../services/paymentGateways');
const { logger } = require('../config/database');

// Validation middleware
const validateOrder = [
  body('formData.firstName').notEmpty().withMessage('First name is required'),
  body('formData.lastName').notEmpty().withMessage('Last name is required'),
  body('formData.email').isEmail().withMessage('Valid email is required'),
  body('formData.phone').notEmpty().withMessage('Phone number is required'),
  body('formData.country').notEmpty().withMessage('Country is required'),
  body('cart').isArray({ min: 1 }).withMessage('Cart must contain at least one item'),
  body('total').isNumeric().withMessage('Total must be a number')
];

const validatePayment = [
  body('amount').isNumeric().withMessage('Amount must be a number'),
  body('method').isIn(['payoneer', 'bank', 'bkash', 'nagad', 'binance']).withMessage('Invalid payment method'),
  body('orderId').notEmpty().withMessage('Order ID is required')
];

// POST /api/order - Create new order
router.post('/', validateOrder, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

  const { formData, cart, total, tax } = req.body;

    // Create order in database
    const order = new Order({
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country
      },
      project: {
        timeline: formData.timeline,
        budget: formData.budget,
        details: formData.projectDetails
      },
      items: cart.map(item => ({
        service: item.service,
        package: item.package,
        quantity: item.quantity || 1,
        price: item.price,
        duration: item.duration
      })),
      subtotal: cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0),
      tax: tax,
      total: total
    });

    await order.save();
    logger.info(`New order created: ${order.orderId}`);

    // Send email notification
    await sendOrderEmail(order);

    res.json({
      success: true,
      message: 'Order created successfully',
      orderId: order.orderId,
      order: order
    });

  } catch (error) {
    logger.error('Order creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// POST /api/order/payment - Process payment
router.post('/payment', validatePayment, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { amount, method, orderId, paymentData } = req.body;

    // Find order in database
    const order = await Order.findOne({ orderId });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if order is already paid
    if (order.payment.status === 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Order is already paid'
      });
    }

    // Update order status to processing
    order.payment.status = 'processing';
    order.payment.method = method;
    await order.save();

    // Create transaction record
    const transaction = new Transaction({
      orderId: orderId,
      amount: amount,
      method: method,
      customer: {
        email: order.customer.email,
        phone: order.customer.phone,
        name: `${order.customer.firstName} ${order.customer.lastName}`
      },
      paymentData: paymentData || {},
      ipAddress: req.ip,
      userAgent: req.get('User-Agent'),
      sessionId: req.session?.id
    });

    await transaction.save();
    logger.info(`Payment initiated: ${transaction.transactionId} for order ${orderId}`);

    // Process payment through gateway
    const paymentResult = await PaymentGatewayService.processPayment(method, {
      ...paymentData,
      amount: amount,
      orderId: orderId
    });

    // Update transaction with gateway response
    transaction.gateway = {
      name: method,
      transactionId: paymentResult.transactionId,
      response: paymentResult.gatewayResponse,
      status: paymentResult.success ? 'success' : 'failed'
    };

    transaction.status = paymentResult.success ? 'completed' : 'failed';
    if (paymentResult.success) {
      transaction.completedAt = new Date();
    } else {
      transaction.failedAt = new Date();
      transaction.error = {
        message: paymentResult.message || 'Payment failed'
      };
    }

    await transaction.save();

    // Update order payment status
    if (paymentResult.success) {
      await order.updatePaymentStatus('completed', paymentResult.transactionId, paymentResult.gatewayResponse);
      logger.info(`Payment completed: ${paymentResult.transactionId} for order ${orderId}`);
    } else {
      await order.updatePaymentStatus('failed', null, paymentResult.gatewayResponse);
      order.payment.failureReason = paymentResult.message;
      await order.save();
      logger.error(`Payment failed: ${paymentResult.message} for order ${orderId}`);
    }

    // Send payment confirmation email
    if (paymentResult.success) {
      await sendPaymentConfirmationEmail(order, transaction);
    }

    res.json({
      success: paymentResult.success,
      transactionId: paymentResult.transactionId,
      message: paymentResult.message,
      gatewayResponse: paymentResult.gatewayResponse,
      orderStatus: order.status,
      paymentStatus: order.payment.status
    });

  } catch (error) {
    logger.error('Payment processing error:', error);
    res.status(500).json({
      success: false,
      message: 'Payment processing failed',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// GET /api/order/:orderId - Get order details
router.get('/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    
    const order = await Order.findOne({ orderId });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Get related transactions
    const transactions = await Transaction.find({ orderId }).sort({ createdAt: -1 });

    res.json({
      success: true,
      order: order,
      transactions: transactions
    });

  } catch (error) {
    logger.error('Order retrieval error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve order',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// GET /api/order/status/:orderId - Get order status
router.get('/status/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    
    const order = await Order.findOne({ orderId }).select('orderId status payment.status payment.method total');
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.json({
      success: true,
      orderId: order.orderId,
      status: order.status,
      paymentStatus: order.payment.status,
      paymentMethod: order.payment.method,
      total: order.total
    });

  } catch (error) {
    logger.error('Order status retrieval error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve order status'
    });
  }
});

// POST /api/order/:orderId/cancel - Cancel order
router.post('/:orderId/cancel', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { reason } = req.body;

    const order = await Order.findOne({ orderId });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    if (order.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Order is already cancelled'
      });
    }

    order.status = 'cancelled';
    order.notes = reason || 'Order cancelled by customer';
    await order.save();

    logger.info(`Order cancelled: ${orderId} - Reason: ${reason}`);

    res.json({
      success: true,
      message: 'Order cancelled successfully',
      orderId: orderId
    });

  } catch (error) {
    logger.error('Order cancellation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to cancel order'
    });
  }
});

// Helper function to send order email
async function sendOrderEmail(order) {
  try {
    const transporter = nodemailer.createTransporter({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

  const orderHtml = `
    <h2>New Order Received</h2>
      <h3>Order ID: ${order.orderId}</h3>
    <h3>Customer Info</h3>
    <ul>
        <li><b>Name:</b> ${order.customer.firstName} ${order.customer.lastName}</li>
        <li><b>Email:</b> ${order.customer.email}</li>
        <li><b>Phone:</b> ${order.customer.phone}</li>
        <li><b>Company:</b> ${order.customer.company || 'N/A'}</li>
        <li><b>Address:</b> ${order.customer.address || 'N/A'}, ${order.customer.city || 'N/A'}, ${order.customer.state || 'N/A'}, ${order.customer.zipCode || 'N/A'}, ${order.customer.country}</li>
    </ul>
    <h3>Project Details</h3>
    <ul>
        <li><b>Timeline:</b> ${order.project.timeline || 'N/A'}</li>
        <li><b>Budget:</b> ${order.project.budget || 'N/A'}</li>
        <li><b>Details:</b> ${order.project.details || 'N/A'}</li>
    </ul>
    <h3>Order Items</h3>
    <table border="1" cellpadding="6" cellspacing="0">
      <thead><tr><th>Service</th><th>Package</th><th>Qty</th><th>Price</th></tr></thead>
      <tbody>
          ${order.items.map(item => `
          <tr>
            <td>${item.service}</td>
            <td>${item.package}</td>
              <td>${item.quantity}</td>
              <td>$${item.price * item.quantity}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
      <p><b>Subtotal:</b> $${order.subtotal}</p>
      <p><b>Tax:</b> $${order.tax}</p>
      <p><b>Total:</b> $${order.total}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.ORDER_RECEIVER || process.env.EMAIL_USER,
      subject: `New Order - ${order.orderId} - LaunchLayer`,
      html: orderHtml
    });

    logger.info(`Order email sent for: ${order.orderId}`);
  } catch (error) {
    logger.error('Order email error:', error);
  }
}

// Helper function to send payment confirmation email
async function sendPaymentConfirmationEmail(order, transaction) {
  try {
    const transporter = nodemailer.createTransporter({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const paymentHtml = `
      <h2>Payment Confirmation</h2>
      <h3>Order ID: ${order.orderId}</h3>
      <h3>Transaction ID: ${transaction.transactionId}</h3>
      <p><b>Payment Method:</b> ${transaction.method.toUpperCase()}</p>
      <p><b>Amount:</b> $${transaction.amount}</p>
      <p><b>Status:</b> ${transaction.status}</p>
      <p><b>Date:</b> ${transaction.completedAt}</p>
      <p>Thank you for your payment. Your order has been confirmed and we will begin working on your project soon.</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: order.customer.email,
      subject: `Payment Confirmation - ${order.orderId} - LaunchLayer`,
      html: paymentHtml
    });

    logger.info(`Payment confirmation email sent for: ${order.orderId}`);
  } catch (error) {
    logger.error('Payment confirmation email error:', error);
  }
}

module.exports = router; 