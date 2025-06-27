import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCreditCard, 
  FaPaypal, 
  FaBitcoin, 
  FaWallet,
  FaShieldAlt,
  FaCheckCircle,
  FaTimes,
  FaLock,
  FaGlobe,
  FaMobile,
  FaUniversity,
  FaExchangeAlt
} from 'react-icons/fa';

const PaymentSystem = ({ amount, onPaymentComplete, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const paymentMethods = [
    {
      id: 'payoneer',
      name: 'Payoneer',
      icon: FaGlobe,
      description: 'International payment platform',
      fees: '2.5%',
      processingTime: '1-2 business days',
      minAmount: 50,
      maxAmount: 10000,
      color: 'bg-blue-500',
      details: {
        accountNumber: '',
        email: ''
      }
    },
    {
      id: 'bank-card',
      name: 'Bank Card',
      icon: FaCreditCard,
      description: 'Visa, Mastercard, American Express',
      fees: '3.5%',
      processingTime: 'Instant',
      minAmount: 10,
      maxAmount: 5000,
      color: 'bg-green-500',
      details: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
      }
    },
    {
      id: 'bkash',
      name: 'bKash',
      icon: FaMobile,
      description: 'Mobile financial service',
      fees: '1.5%',
      processingTime: 'Instant',
      minAmount: 10,
      maxAmount: 25000,
      color: 'bg-orange-500',
      details: {
        phoneNumber: '',
        pin: ''
      }
    },
    {
      id: 'nagad',
      name: 'Nagad',
      icon: FaWallet,
      description: 'Digital financial service',
      fees: '1.2%',
      processingTime: 'Instant',
      minAmount: 10,
      maxAmount: 25000,
      color: 'bg-purple-500',
      details: {
        phoneNumber: '',
        pin: ''
      }
    },
    {
      id: 'binance',
      name: 'Binance Pay',
      icon: FaBitcoin,
      description: 'Cryptocurrency payment',
      fees: '0.5%',
      processingTime: '5-10 minutes',
      minAmount: 20,
      maxAmount: 50000,
      color: 'bg-yellow-500',
      details: {
        walletAddress: '',
        cryptoType: 'USDT'
      }
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      icon: FaUniversity,
      description: 'Direct bank transfer',
      fees: '0%',
      processingTime: '1-3 business days',
      minAmount: 100,
      maxAmount: 100000,
      color: 'bg-indigo-500',
      details: {
        accountNumber: '',
        bankName: '',
        swiftCode: ''
      }
    }
  ];

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setPaymentDetails(method.details);
    setStep(2);
  };

  const handleInputChange = (field, value) => {
    setPaymentDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validatePaymentDetails = () => {
    if (!selectedMethod) return false;
    
    const requiredFields = Object.keys(selectedMethod.details);
    return requiredFields.every(field => paymentDetails[field] && paymentDetails[field].trim() !== '');
  };

  const processPayment = async () => {
    if (!validatePaymentDetails()) return;

    setIsProcessing(true);
    setErrorMessage('');
    try {
      // TODO: Replace with real API call
      // Example:
      // const response = await axios.post('/api/payment', { method: selectedMethod.id, ...paymentDetails, amount });
      // if (!response.data.success) throw new Error(response.data.message || 'Payment failed');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsProcessing(false);
      setStep(3);
      
      // Call the completion callback
      if (onPaymentComplete) {
        onPaymentComplete({
          method: selectedMethod.name,
          amount: amount,
          transactionId: `TXN${Date.now()}`,
          status: 'success'
        });
      }
    } catch (err) {
      setIsProcessing(false);
      setErrorMessage(err.message || 'Payment failed. Please try again.');
    }
  };

  const getFeeAmount = () => {
    if (!selectedMethod) return 0;
    const feePercentage = parseFloat(selectedMethod.fees.replace('%', ''));
    return (amount * feePercentage) / 100;
  };

  const getTotalAmount = () => {
    return amount + getFeeAmount();
  };

  if (step === 1) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl max-w-full w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-3 sm:mx-4 my-4"
        >
          <div className="p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">Select Payment Method</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl flex-shrink-0"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm sm:text-base">Total Amount:</span>
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">${amount}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {paymentMethods.map((method) => (
                <motion.button
                  key={method.id}
                  onClick={() => handleMethodSelect(method)}
                  className={`p-3 sm:p-4 rounded-lg border-2 border-gray-200 hover:border-primary-500 transition-all duration-200 text-left w-full min-w-0 ${
                    selectedMethod?.id === method.id ? 'border-primary-500 bg-primary-50' : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">{method.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm break-words">{method.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">Fee: {method.fees}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500 break-words">{method.processingTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl max-w-md w-full"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Payment Details</h2>
              <button
                onClick={() => setStep(1)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 ${selectedMethod.color} rounded-full flex items-center justify-center text-white`}>
                  <selectedMethod.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">{selectedMethod.name}</h3>
                  <p className="text-sm text-gray-600">{selectedMethod.description}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span>${amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee ({selectedMethod.fees}):</span>
                  <span>${getFeeAmount().toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total:</span>
                  <span>${getTotalAmount().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg px-4 py-2 mb-4 text-center font-semibold">
                {errorMessage}
              </div>
            )}

            <div className="space-y-4">
              {selectedMethod.id === 'payoneer' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payoneer Account Number
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter account number"
                      aria-label="Payoneer Account Number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={paymentDetails.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter email address"
                      aria-label="Email Address"
                    />
                  </div>
                </>
              )}

              {selectedMethod.id === 'bank-card' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      aria-label="Card Number"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={paymentDetails.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MM/YY"
                        maxLength="5"
                        aria-label="Expiry Date"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={paymentDetails.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123"
                        maxLength="4"
                        aria-label="CVV"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        value={paymentDetails.cardholderName}
                        onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                        aria-label="Cardholder Name"
                      />
                    </div>
                  </div>
                </>
              )}

              {(selectedMethod.id === 'bkash' || selectedMethod.id === 'nagad') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={paymentDetails.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="01XXXXXXXXX"
                      aria-label="Phone Number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PIN
                    </label>
                    <input
                      type="password"
                      value={paymentDetails.pin}
                      onChange={(e) => handleInputChange('pin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter PIN"
                      maxLength="4"
                      aria-label="PIN"
                    />
                  </div>
                </>
              )}

              {selectedMethod.id === 'binance' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.walletAddress}
                      onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Binance wallet address"
                      aria-label="Wallet Address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cryptocurrency Type
                    </label>
                    <select
                      value={paymentDetails.cryptoType}
                      onChange={(e) => handleInputChange('cryptoType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Cryptocurrency Type"
                    >
                      <option value="USDT">USDT (Tether)</option>
                      <option value="BTC">BTC (Bitcoin)</option>
                      <option value="ETH">ETH (Ethereum)</option>
                      <option value="BNB">BNB (Binance Coin)</option>
                    </select>
                  </div>
                </>
              )}

              {selectedMethod.id === 'bank-transfer' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter account number"
                      aria-label="Account Number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter bank name"
                      aria-label="Bank Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SWIFT Code
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.swiftCode}
                      onChange={(e) => handleInputChange('swiftCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter SWIFT code"
                      aria-label="SWIFT Code"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={processPayment}
                disabled={!validatePaymentDetails() || isProcessing}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <FaLock className="w-4 h-4" />
                    <span>Pay ${getTotalAmount().toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl max-w-md w-full text-center"
        >
          <div className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your payment of ${getTotalAmount().toFixed(2)} has been processed successfully.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span className="font-medium">{selectedMethod.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span className="font-medium">TXN{Date.now()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-medium">${amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee:</span>
                  <span className="font-medium">${getFeeAmount().toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total:</span>
                  <span>${getTotalAmount().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
};

export default PaymentSystem;