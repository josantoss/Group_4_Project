import React from 'react';
import { FiShield, FiStar, FiShoppingCart, FiUsers, FiFeather } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import BlurText from '../components/BlurText';

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
    name: 'Ethiopian Heritage Shirt',
    price: 89,
    rating: 5,
    classification: 'Cultural',
  },
  {
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
    name: 'Organic Linen Trousers',
    price: 119,
    rating: 4,
    classification: 'Women',
  },
  {
    image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=600&q=80',
    name: 'Sustainable Wool Sweater',
    price: 169,
    rating: 4.8,
    classification: 'Unisex',
  },
];

const ProductCard = ({ image, name, price, rating, classification }) => (
  <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
    <img src={image} alt={name} className="h-48 w-full object-cover" />
    <div className="flex-1 flex flex-col justify-between p-4">
      <div>
        <span className="inline-block text-xs px-2 py-1 rounded-full bg-[#f5eee6] text-aradabuy-orange font-semibold mb-2">
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
        <span className="text-aradabuy-orange font-bold text-xl">${price}</span>
      </div>
      <button
        className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold bg-aradabuy-orange text-white hover:bg-[#a53e1e] transition-all"
        onClick={() => alert(`Added ${name} to cart!`)}
      >
        <FiShoppingCart />
        Add to Cart
      </button>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center h-72 max-w-sm mx-auto flex flex-col justify-center transform hover:-translate-y-2">
    <div className="flex justify-center mb-4 mt-0">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#CE542C]/10 mx-auto mb-2">
        {/* Icon is visible and not covered */}
        {React.cloneElement(icon, { className: "h-8 w-8 text-[#CE542C]" })}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#2c3037]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#2c3037]">
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <BlurText
            text="New Season, New You"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
            animateBy="words"
          />
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our latest collection of minimalist, unisex clothing that celebrates both modern style and Ethiopian cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/shop">
              <button
                className="bg-white text-[#2c3037] border border-[#2c3037]/20 font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-[#CE542C] hover:text-white transition-all duration-200"
                style={{ minWidth: 160 }}
              >
                Shop Now
              </button>
            </a>
            <a href="/about">
              <button
                className="border border-white/30 text-white px-8 py-3 rounded-md transition-all hover:bg-white hover:text-black font-semibold"
                style={{ minWidth: 160, backgroundColor: 'transparent' }}
              >
                Explore Collection
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ background: '#f5eee6' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#2c3037]">
              Why Choose AradaBuy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At AradaBuy, we believe fashion should be both beautiful and meaningful. Our mission is to create timeless pieces that honor Ethiopian heritage while embracing contemporary minimalism.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            <FeatureCard
              icon={<FiShield className="h-8 w-8 text-[#CE542C]" />}
              title="Premium Quality"
              description="Carefully crafted garments using the finest materials and ethical manufacturing processes."
            />
            <FeatureCard
              icon={<FiStar className="h-8 w-8 text-[#CE542C]" />}
              title="Timeless Style"
              description="Minimalist designs that transcend trends, perfect for the modern, conscious consumer."
            />
            <FeatureCard
              icon={<FiFeather className="h-8 w-8 text-[#CE542C]" />}
              title="Sustainable Fashion"
              description="Committed to environmental responsibility and supporting local Ethiopian artisans."
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
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
    </main>
  );
};

export default Home;