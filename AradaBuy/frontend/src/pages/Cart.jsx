import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <FiShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some items to get started</p>
        <Link 
          to="/shop" 
          className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 bg-[#CE542C] text-white hover:bg-[#a53e1e] shadow-lg hover:shadow-xl transform hover:scale-105 h-11 rounded-md px-8"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;