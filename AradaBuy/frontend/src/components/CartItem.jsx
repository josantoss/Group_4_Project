// src/components/CartItem.jsx
import React from 'react';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border-b border-gray-200">
      <div className="flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-[#CE542C]"
          >
            <FiTrash2 />
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mt-1">{item.classification}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              <FiMinus />
            </button>
            <span className="px-3 py-1">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              <FiPlus />
            </button>
          </div>
          
          <div className="text-right">
            <p className="font-semibold text-[#CE542C]">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-gray-500">
                ${item.price} each
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;