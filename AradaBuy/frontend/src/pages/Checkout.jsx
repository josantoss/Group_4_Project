// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDollarSign, FiUser, FiCreditCard, FiPhone, FiCheckCircle, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import cbeLogo from '../assets/cbe_logo.png';
import telebirrLogo from '../assets/telebirr_logo.jpg';

const Checkout = () => {
  const { cart, cartTotal } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('cbe');
  const [formData, setFormData] = useState({
    name: '',
    accountNumber: '',
    phoneNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const paymentMethods = [
    {
      id: 'cbe',
      name: 'CBE (Commercial Bank of Ethiopia)',
      description: 'Pay using your CBE account',
      icon: cbeLogo,
      fields: [
        { name: 'name', label: 'Account Holder Name', type: 'text', icon: FiUser, required: true },
        { name: 'accountNumber', label: 'Account Number', type: 'text', icon: FiCreditCard, required: true }
      ]
    },
    {
      id: 'telebirr',
      name: 'TeleBirr',
      description: 'Pay using your TeleBirr account',
      icon: telebirrLogo,
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', icon: FiUser, required: true },
        { name: 'phoneNumber', label: 'Phone Number', type: 'tel', icon: FiPhone, required: true }
      ]
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      description: 'Pay when you receive your order',
      icon: '💰',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', icon: FiUser, required: true },
        { name: 'phoneNumber', label: 'Phone Number', type: 'tel', icon: FiPhone, required: true }
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const selectedMethod = paymentMethods.find(method => method.id === selectedPayment);

  //Success Message
  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <FiCheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Order!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for choosing us! We will deliver your product as fast as possible.
          </p>
          <p className="text-gray-500 mb-8">
            Your order has been confirmed and will be processed shortly. You will receive a confirmation email soon.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#CE542C] text-white rounded-md hover:bg-[#a53e1e] transition-colors font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/cart" 
            className="flex items-center text-[#CE542C] hover:text-[#a53e1e]"
          >
            <FiArrowLeft className="mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Checkout</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Payment Method
                </label>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label key={method.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="mr-3 text-[#CE542C] focus:ring-[#CE542C]"
                      />
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                          {typeof method.icon === 'string' && method.icon.startsWith('💰') ? (
                            <span className="text-lg">{method.icon}</span>
                          ) : (
                            <img 
                              src={method.icon} 
                              alt={method.name}
                              className="w-6 h-6 object-contain"
                            />
                          )}
                        </div>
                        <div>
                          <span className="font-medium">{method.name}</span>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/*Form Fields */}
              {selectedMethod && (
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">{selectedMethod.name} Details</h3>
                  {selectedMethod.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <div className="relative">
                        <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.required}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CE542C] focus:border-[#CE542C]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Amount Display */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Amount to Pay:</span>
                  <div className="flex items-center">
                    <FiDollarSign className="text-[#CE542C] mr-1" />
                    <span className="text-xl font-bold text-[#CE542C]">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#CE542C] text-white rounded-md hover:bg-[#a53e1e] transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Complete Payment
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FiShoppingBag className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center border-b border-gray-200 pb-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.classification}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                          <span className="font-medium text-[#CE542C]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-4 pt-2 border-t border-gray-200">
                <span>Total</span>
                <span className="text-[#CE542C]">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;