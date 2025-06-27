const express = require('express');
const crypto = require('crypto');
const router = express.Router();

// Import models and services
const Order = require('../models/Order');
const Transaction = require('../models/Transaction');
const PaymentGatewayService = require('../services/paymentGateways');
const { logger } = require('../config/database');

// bKash Payment Callback
router.post('/bkash', async (req, res) => {
  try {
    const { paymentID, status, amount, currency, merchantInvoiceNumber } = req.body;
    
    logger.info(`bKash callback received: ${paymentID} - Status: ${status}`);

    // Verify the callback signature (in production)
    // const signature = req.headers['x-bkash-signature'];
    // if (!verifyBkashSignature(req.body, signature)) {
    //   return res.status(400).json({ error: 'Invalid signature' });
    // }

    // Find transaction by payment ID
    const transaction = await Transaction.findOne({
      'gateway.transactionId': paymentID
    });

    if (!transaction) {
      logger.error(`bKash callback: Transaction not found for paymentID: ${paymentID}`);
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Update transaction status
    if (status === 'Completed') {
      await transaction.updateStatus('completed', {
        gatewayResponse: req.body,
        callbackReceived: true
      });

      // Update order payment status
      const order = await Order.findOne({ orderId: transaction.orderId });
      if (order) {
        await order.updatePaymentStatus('completed', paymentID, req.body);
        logger.info(`bKash payment completed: ${paymentID} for order ${order.orderId}`);
      }

      res.json({ status: 'success', message: 'Payment processed successfully' });
    } else {
      await transaction.updateStatus('failed', {
        gatewayResponse: req.body,
        callbackReceived: true,
        failureReason: status
      });

      // Update order payment status
      const order = await Order.findOne({ orderId: transaction.orderId });
      if (order) {
        await order.updatePaymentStatus('failed', null, req.body);
        order.payment.failureReason = status;
        await order.save();
      }

      res.json({ status: 'failed', message: 'Payment failed' });
    }

  } catch (error) {
    logger.error('bKash callback error:', error);
    res.status(500).json({ error: 'Callback processing failed' });
  }
});

// Nagad Payment Callback
router.post('/nagad', async (req, res) => {
  try {
    const { paymentRefId, status, amount, currency } = req.body;
    
    logger.info(`Nagad callback received: ${paymentRefId} - Status: ${status}`);

    // Verify the callback signature (in production)
    // const signature = req.headers['x-nagad-signature'];
    // if (!verifyNagadSignature(req.body, signature)) {
    //   return res.status(400).json({ error: 'Invalid signature' });
    // }

    // Find transaction by payment reference ID
    const transaction = await Transaction.findOne({
      'gateway.transactionId': paymentRefId
    });

    if (!transaction) {
      logger.error(`Nagad callback: Transaction not found for paymentRefId: ${paymentRefId}`);
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Update transaction status
    if (status === 'success') {
      await transaction.updateStatus('completed', {
        gatewayResponse: req.body,
        callbackReceived: true
      });

      // Update order payment status
      const order = await Order.findOne({ orderId: transaction.orderId });
      if (order) {
        await order.updatePaymentStatus('completed', paymentRefId, req.body);
        logger.info(`Nagad payment completed: ${paymentRefId} for order ${order.orderId}`);
      }

      res.json({ status: 'success', message: 'Payment processed successfully' });
    } else {
      await transaction.updateStatus('failed', {
        gatewayResponse: req.body,
        callbackReceived: true,
        failureReason: status
      });

      // Update order payment status
      const order = await Order.findOne({ orderId: transaction.orderId });
      if (order) {
        await order.updatePaymentStatus('failed', null, req.body);
        order.payment.failureReason = status;
        await order.save();
      }

      res.json({ status: 'failed', message: 'Payment failed' });
    }

  } catch (error) {
    logger.error('Nagad callback error:', error);
    res.status(500).json({ error: 'Callback processing failed' });
  }
});

// Binance Payment Callback
router.post('/binance', async (req, res) => {
  try {
    const { merchantTradeNo, status, amount, currency } = req.body;
    
    logger.info(`Binance callback received: ${merchantTradeNo} - Status: ${status}`);

    // Verify the callback signature (in production)
    // const signature = req.headers['x-binance-signature'];
    // if (!verifyBinanceSignature(req.body, signature)) {
    //   return res.status(400).json({ error: 'Invalid signature' });
    // }

    // Find transaction by merchant trade number
    const transaction = await Transaction.findOne({
      'gateway.transactionId': merchantTradeNo
    });

    if (!transaction) {
      logger.error(`Binance callback: Transaction not found for merchantTradeNo: ${merchantTradeNo}`);
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Update transaction status
    if (status === 'PAID') {
      await transaction.updateStatus('completed', {
        gatewayResponse: req.body,
        callbackReceived: true
      });

      // Update order payment status
      const order = await Order.findOne({ orderId: transaction.orderId });
      if (order) {
        await order.updatePaymentStatus('completed', merchantTradeNo, req.body);
        logger.info(`Binance payment completed: ${merchantTradeNo} for order ${order.orderId}`);
      }

      res.json({ status: 'success', message: 'Payment processed successfully' });
    } else {
      await transaction.updateStatus('failed', {
        gatewayResponse: req.body,
        callbackReceived: true,
        failureReason: status
      });

      // Update order payment status
      const order = await Order.findOne({ orderId: transaction.orderId });
      if (order) {
        await order.updatePaymentStatus('failed', null, req.body);
        order.payment.failureReason = status;
        await order.save();
      }

      res.json({ status: 'failed', message: 'Payment failed' });
    }

  } catch (error) {
    logger.error('Binance callback error:', error);
    res.status(500).json({ error: 'Callback processing failed' });
  }
});

// Payoneer Payment Callback
router.post('/payoneer', async (req, res) => {
  try {
    const { reference_id, status, amount, currency } = req.body;
    
    logger.info(`Payoneer callback received: ${reference_id} - Status: ${status}`);

    // Verify the callback signature (in production)
    // const signature = req.headers['x-payoneer-signature'];
    // if (!verifyPayoneerSignature(req.body, signature)) {
    //   return res.status(400).json({ error: 'Invalid signature' });
    // }

    // Find transaction by reference ID
    const transaction = await Transaction.findOne({
      'gateway.transactionId': reference_id
    });

    if (!transaction) {
      logger.error(`Payoneer callback: Transaction not found for reference_id: ${reference_id}`);
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Update transaction status
    if (status === 'success') {
      await transaction.updateStatus('completed', {
        gatewayResponse: req.body,
        callbackReceived: true
      });

      // Update order payment status
      const order = await Order.findOne({ orderId: transaction.orderId });
      if (order) {
        await order.updatePaymentStatus('completed', reference_id, req.body);
        logger.info(`Payoneer payment completed: ${reference_id} for order ${order.orderId}`);
      }

      res.json({ status: 'success', message: 'Payment processed successfully' });
    } else {
      await transaction.updateStatus('failed', {
        gatewayResponse: req.body,
        callbackReceived: true,
        failureReason: status
      });

      // Update order payment status
      const order = await Order.findOne({ orderId: transaction.orderId });
      if (order) {
        await order.updatePaymentStatus('failed', null, req.body);
        order.payment.failureReason = status;
        await order.save();
      }

      res.json({ status: 'failed', message: 'Payment failed' });
    }

  } catch (error) {
    logger.error('Payoneer callback error:', error);
    res.status(500).json({ error: 'Callback processing failed' });
  }
});

// Generic callback handler for testing
router.post('/test', async (req, res) => {
  try {
    logger.info('Test callback received:', req.body);
    
    // This is for testing purposes only
    res.json({ 
      status: 'success', 
      message: 'Test callback received successfully',
      receivedData: req.body
    });

  } catch (error) {
    logger.error('Test callback error:', error);
    res.status(500).json({ error: 'Test callback processing failed' });
  }
});

// Helper function to verify bKash signature (placeholder)
function verifyBkashSignature(data, signature) {
  // Implement bKash signature verification
  // This is a placeholder - implement according to bKash documentation
  return true;
}

// Helper function to verify Nagad signature (placeholder)
function verifyNagadSignature(data, signature) {
  // Implement Nagad signature verification
  // This is a placeholder - implement according to Nagad documentation
  return true;
}

// Helper function to verify Binance signature (placeholder)
function verifyBinanceSignature(data, signature) {
  // Implement Binance signature verification
  // This is a placeholder - implement according to Binance documentation
  return true;
}

// Helper function to verify Payoneer signature (placeholder)
function verifyPayoneerSignature(data, signature) {
  // Implement Payoneer signature verification
  // This is a placeholder - implement according to Payoneer documentation
  return true;
}

module.exports = router; 