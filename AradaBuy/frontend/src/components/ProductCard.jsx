import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ image, name, price, rating, classification }) => (
  <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
    <img src={image} alt={name} className="h-48 w-full object-cover" />
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
          <span className="ml-2 text-sm text-gray-500">{rating}</span>
        </div>
        <span className="text-[#CE542C] font-bold text-xl">${price}</span>
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

// Featured products section
const FeaturedProductsSection = () => {
  const featuredProducts = [
    {
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      name: 'Minimalist Cotton Blazer',
      price: 149,
      rating: 4.5,
      classification: 'Unisex',
    },
    {
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      name: 'Jeans Jacket',
      price: 89,
      rating: 5,
      classification: 'Cultural',
    },
    {
      image: 'https://images.unsplash.com/photo-1615206798678-910e30c5666a?auto=format&fit=crop&w=600&q=80',
      name: 'Organic Linen Trousers',
      price: 119,
      rating: 4,
      classification: 'Women',
    },
    {
      image: 'https://images.unsplash.com/photo-1633972767447-5098f0322a45?auto=format&fit=crop&w=600&q=80',
      name: 'Sustainable Wool Sweater',
      price: 169,
      rating: 4.8,
      classification: 'Unisex',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#2c3037]">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully curated collection blending modern style with heritage.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;