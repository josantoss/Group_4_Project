import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ 
  image, 
  name, 
  price, 
  originalPrice,
  rating,
  reviewCount,
  classification,
  onSale
}) => {
  // Calculate discount percentage if originalPrice exists
  const discount = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        {onSale && (
          <div className="absolute top-3 left-3 bg-[#CE542C] text-white text-xs font-semibold px-2 py-1 rounded-full">
            SALE{discount && ` ${discount}%`}
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-[#f5eee6] text-[#CE542C] font-semibold mb-2">
            {classification}
          </span>
          <h3 className="font-semibold text-lg text-[#2c3037] mb-1">{name}</h3>
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              {rating.toFixed(1)} ({reviewCount})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#CE542C] font-bold text-xl">${price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
            )}
          </div>
        </div>
        <button
          className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold bg-[#CE542C] text-white hover:bg-[#a53e1e] transition-colors duration-200"
        >
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;