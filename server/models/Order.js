const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
    default: () => 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000)
  },
  
  // Customer Information
  customer: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: String,
    address: String,
    city: String,
    state: String,
    zipCode: String,
    country: { type: String, required: true }
  },

  // Project Details
  project: {
    timeline: String,
    budget: String,
    details: String
  },

  // Order Items
  items: [{
    service: { type: String, required: true },
    package: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    price: { type: Number, required: true },
    duration: String
  }],

  // Financial Information
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  currency: { type: String, default: 'USD' },

  // Payment Information
  payment: {
    method: { type: String, required: true }, // 'payoneer', 'bank', 'bkash', 'nagad', 'binance'
    status: { 
      type: String, 
      enum: ['pending', 'processing', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    transactionId: String,
    gatewayResponse: mongoose.Schema.Types.Mixed,
    processedAt: Date,
    failureReason: String
  },

  // Order Status
  status: {
    type: String,
    enum: ['draft', 'confirmed', 'in_progress', 'completed', 'cancelled'],
    default: 'draft'
  },

  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  paymentDate: Date,
  completionDate: Date,

  // Additional Fields
  notes: String,
  tags: [String],
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' }
}, {
  timestamps: true
});

// Pre-save middleware to update updatedAt
orderSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Virtual for order summary
orderSchema.virtual('orderSummary').get(function() {
  return {
    orderId: this.orderId,
    customerName: `${this.customer.firstName} ${this.customer.lastName}`,
    total: this.total,
    status: this.status,
    paymentStatus: this.payment.status
  };
});

// Method to update payment status
orderSchema.methods.updatePaymentStatus = function(status, transactionId = null, gatewayResponse = null) {
  this.payment.status = status;
  if (transactionId) this.payment.transactionId = transactionId;
  if (gatewayResponse) this.payment.gatewayResponse = gatewayResponse;
  this.payment.processedAt = new Date();
  
  if (status === 'completed') {
    this.paymentDate = new Date();
    this.status = 'confirmed';
  }
  
  return this.save();
};

// Static method to get orders by payment status
orderSchema.statics.getByPaymentStatus = function(status) {
  return this.find({ 'payment.status': status }).sort({ createdAt: -1 });
};

// Static method to get orders by customer email
orderSchema.statics.getByCustomerEmail = function(email) {
  return this.find({ 'customer.email': email }).sort({ createdAt: -1 });
};

module.exports = mongoose.model('Order', orderSchema); 