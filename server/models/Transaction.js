const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
    unique: true,
    default: () => 'TXN-' + Date.now() + '-' + Math.floor(Math.random() * 10000)
  },

  orderId: {
    type: String,
    required: true,
    ref: 'Order'
  },

  // Payment Details
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  method: {
    type: String,
    required: true,
    enum: ['payoneer', 'bank', 'bkash', 'nagad', 'binance', 'stripe', 'paypal']
  },

  // Gateway Information
  gateway: {
    name: String,
    transactionId: String,
    reference: String,
    response: mongoose.Schema.Types.Mixed,
    status: {
      type: String,
      enum: ['pending', 'processing', 'success', 'failed', 'cancelled', 'refunded'],
      default: 'pending'
    }
  },

  // Customer Information
  customer: {
    email: String,
    phone: String,
    name: String
  },

  // Payment Method Specific Data
  paymentData: {
    // For Bank Transfer
    bankName: String,
    accountNumber: String,
    routingNumber: String,
    
    // For Mobile Money (bKash, Nagad)
    mobileNumber: String,
    transactionReference: String,
    
    // For Crypto (Binance)
    walletAddress: String,
    cryptoAmount: Number,
    cryptoType: String,
    
    // For Payoneer
    payoneerEmail: String,
    payoneerAccount: String,
    
    // Generic
    cardLast4: String,
    cardBrand: String
  },

  // Status Tracking
  status: {
    type: String,
    enum: ['initiated', 'processing', 'completed', 'failed', 'cancelled', 'refunded'],
    default: 'initiated'
  },

  // Timestamps
  initiatedAt: { type: Date, default: Date.now },
  processedAt: Date,
  completedAt: Date,
  failedAt: Date,

  // Error Information
  error: {
    code: String,
    message: String,
    details: mongoose.Schema.Types.Mixed
  },

  // Audit Trail
  audit: [{
    action: String,
    status: String,
    timestamp: { type: Date, default: Date.now },
    details: mongoose.Schema.Types.Mixed
  }],

  // Security
  ipAddress: String,
  userAgent: String,
  sessionId: String,

  // Additional
  notes: String,
  tags: [String]
}, {
  timestamps: true
});

// Pre-save middleware
transactionSchema.pre('save', function(next) {
  if (this.isModified('status')) {
    this.audit.push({
      action: 'status_change',
      status: this.status,
      timestamp: new Date()
    });
  }
  next();
});

// Method to update status
transactionSchema.methods.updateStatus = function(newStatus, details = {}) {
  this.status = newStatus;
  
  if (newStatus === 'completed') {
    this.completedAt = new Date();
  } else if (newStatus === 'failed') {
    this.failedAt = new Date();
  }
  
  this.audit.push({
    action: 'status_update',
    status: newStatus,
    timestamp: new Date(),
    details
  });
  
  return this.save();
};

// Method to add audit entry
transactionSchema.methods.addAuditEntry = function(action, details = {}) {
  this.audit.push({
    action,
    status: this.status,
    timestamp: new Date(),
    details
  });
  return this.save();
};

// Static method to get transactions by status
transactionSchema.statics.getByStatus = function(status) {
  return this.find({ status }).sort({ createdAt: -1 });
};

// Static method to get transactions by method
transactionSchema.statics.getByMethod = function(method) {
  return this.find({ method }).sort({ createdAt: -1 });
};

// Static method to get transactions by date range
transactionSchema.statics.getByDateRange = function(startDate, endDate) {
  return this.find({
    createdAt: {
      $gte: startDate,
      $lte: endDate
    }
  }).sort({ createdAt: -1 });
};

module.exports = mongoose.model('Transaction', transactionSchema); 