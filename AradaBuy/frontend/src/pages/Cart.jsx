// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal,
    cartCount 
  } = useCart();

  if (cart.length === 0) {
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
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link 
            to="/shop" 
            className="flex items-center text-[#CE542C] hover:text-[#a53e1e] mr-4"
          >
            <FiArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Your Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <button 
              onClick={clearCart}
              className="text-sm text-[#CE542C] hover:text-[#a53e1e]"
            >
              Clear Cart
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">$0.00</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold text-[#CE542C]">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-[#CE542C] text-white py-3 px-6 rounded-md hover:bg-[#a53e1e] transition-colors font-semibold shadow-lg hover:shadow-xl">
              Proceed to Checkout
            </button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>or</p>
            <Link 
              to="/shop" 
              className="text-[#CE542C] hover:text-[#a53e1e] font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;