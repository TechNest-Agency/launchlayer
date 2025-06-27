import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaTrash, FaCheck, FaLock, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import apiClient from '../config/api';
import PaymentSystem from '../components/PaymentSystem';

const Order = () => {
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    projectDetails: '',
    timeline: '',
    budget: ''
  });
  const [orderComplete, setOrderComplete] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('launchlayer-cart');
    console.log('Order page - Loading cart from localStorage:', savedCart);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log('Order page - Parsed cart:', parsedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        setCart([]);
      }
    } else {
      console.log('Order page - No cart found in localStorage');
      setCart([]);
    }
  }, []);

  const removeFromCart = (itemId) => {
    // Show confirmation dialog
    const itemToRemove = cart.find(item => item.id === itemId);
    const confirmed = window.confirm(
      `Are you sure you want to remove "${itemToRemove?.service} - ${itemToRemove?.package}" from your cart?`
    );
    
    if (confirmed) {
      const newCart = cart.filter(item => item.id !== itemId);
      setCart(newCart);
      // Update localStorage
      localStorage.setItem('launchlayer-cart', JSON.stringify(newCart));
      console.log('Order page - Removed item, updated localStorage:', newCart);
      
      // Dispatch cart update event for navbar
      window.dispatchEvent(new Event('cartUpdated'));
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
      successMessage.textContent = 'Item removed from cart';
      document.body.appendChild(successMessage);
      
      // Remove success message after 3 seconds
      setTimeout(() => {
        if (successMessage.parentNode) {
          successMessage.parentNode.removeChild(successMessage);
        }
      }, 3000);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    const newCart = cart.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(newCart);
    // Update localStorage
    localStorage.setItem('launchlayer-cart', JSON.stringify(newCart));
    console.log('Order page - Updated quantity, updated localStorage:', newCart);
    
    // Dispatch cart update event for navbar
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const totalCartValue = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const tax = totalCartValue * 0.1; // 10% tax
  const total = totalCartValue + tax;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await apiClient.post('/api/order', {
        formData,
        cart,
        total,
        tax
      });
      if (res.data.success) {
        setOrderComplete(true);
        setCart([]);
        localStorage.removeItem('launchlayer-cart');
      } else {
        setError(res.data.message || 'Order failed.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Order failed.');
    }
    setLoading(false);
  };

  const handlePayment = (amount) => {
    setPaymentAmount(amount);
    setShowPayment(true);
  };

  const handlePaymentComplete = (paymentResult) => {
    console.log('Payment completed:', paymentResult);
    setShowPayment(false);
    setCart([]); // Clear cart after successful payment
    localStorage.removeItem('launchlayer-cart'); // Clear cart from localStorage
    
    // Dispatch cart update event for navbar
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show success message or redirect
    alert(`Payment successful! Transaction ID: ${paymentResult.transactionId}`);
    setOrderComplete(true);
  };

  const handlePaymentClose = () => {
    setShowPayment(false);
  };

  const clearCart = () => {
    const confirmed = window.confirm('Are you sure you want to remove all items from your cart?');
    
    if (confirmed) {
      setCart([]);
      localStorage.removeItem('launchlayer-cart');
      console.log('Order page - Cart cleared');
      
      // Dispatch cart update event for navbar
      window.dispatchEvent(new Event('cartUpdated'));
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
      successMessage.textContent = 'Cart cleared successfully';
      document.body.appendChild(successMessage);
      
      // Remove success message after 3 seconds
      setTimeout(() => {
        if (successMessage.parentNode) {
          successMessage.parentNode.removeChild(successMessage);
        }
      }, 3000);
    }
  };

  if (orderComplete) {
    return (
      <>
        <Helmet>
          <title>Order Complete - LaunchLayer</title>
        </Helmet>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center"
          >
            <div className="text-green-500 text-6xl mb-4">
              <FaCheck />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Complete!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. We'll contact you within 24 hours to discuss your project details.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </motion.button>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Order & Checkout - LaunchLayer</title>
        <meta name="description" content="Complete your order and checkout for LaunchLayer services." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaShoppingCart className="mr-2" />
                  Order Summary
                </h2>
                
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <FaShoppingCart className="text-4xl text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-4">Add some services to get started</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/services'}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Browse Services
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Clear All Button */}
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-700">Cart Items ({cart.length})</h3>
                      <button
                        onClick={clearCart}
                        className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center space-x-1 transition-colors"
                      >
                        <FaTrash className="w-3 h-3" />
                        <span>Clear All</span>
                      </button>
                    </div>
                    
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.service}</h4>
                          <p className="text-sm text-gray-600">{item.package} • {item.duration}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                              title="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity || 1}</span>
                            <button
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                              title="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-bold text-blue-600 min-w-[60px] text-right">${item.price * (item.quantity || 1)}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-all duration-200"
                            title="Remove item"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Order Form */}
              {cart.length > 0 && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IN">India</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Project Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Timeline</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="2-4 months">2-4 months</option>
                        <option value="4-6 months">4-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Budget</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Project Details</label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                </motion.form>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
                
                {cart.length === 0 ? (
                  <p className="text-gray-500">No items in cart</p>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.service} ({item.quantity || 1}x)</span>
                          <span className="font-semibold">${item.price * (item.quantity || 1)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">${totalCartValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (10%)</span>
                        <span className="font-semibold">${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-blue-600">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <FaLock className="mr-2" />
                        Secure checkout
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaShieldAlt className="mr-2" />
                        Money-back guarantee
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaHeadset className="mr-2" />
                        24/7 support
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      disabled={loading || cart.length === 0}
                      className={`w-full py-4 rounded-lg font-semibold text-white transition-colors mt-6 ${
                        loading || cart.length === 0
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                      onClick={() => handlePayment(total)}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        `Proceed to Payment - $${total.toFixed(2)}`
                      )}
                    </motion.button>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <div className="max-w-2xl mx-auto my-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* Payment System */}
      {showPayment && (
        <PaymentSystem
          amount={paymentAmount}
          onPaymentComplete={handlePaymentComplete}
          onClose={handlePaymentClose}
        />
      )}
    </>
  );
};

export default Order; 