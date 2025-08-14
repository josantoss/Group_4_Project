import { useState, useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiHeart, FiGrid, FiList, FiChevronDown, FiCheck } from 'react-icons/fi';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useWishList } from '../context/WishListContext';

const ProductCard = ({ 
  product, 
  onAddToWishList, 
  isInWishList,
  showWishListMessage 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [localIsInWishList, setLocalIsInWishList] = useState(isInWishList);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  useEffect(() => {
    setLocalIsInWishList(isInWishList);
  }, [isInWishList]);

  const handleWishListClick = () => {
    onAddToWishList(product);
    setLocalIsInWishList(!localIsInWishList);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  return (
    <div 
      className="relative bg-white rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist added message */}
      {showAddedMessage && showWishListMessage && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 z-10 animate-bounce">
          <FiCheck /> Added to wishlist!
        </div>
      )}
      
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`h-48 w-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        {product.onSale && (
          <div className="absolute top-3 left-3 bg-[#CE542C] text-white text-xs font-semibold px-2 py-1 rounded-full">
            SALE
          </div>
        )}
        <button 
          onClick={handleWishListClick}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200 z-10"
        >
          {localIsInWishList ? (
            <FaHeart className="h-4 w-4 text-[#CE542C]" />
          ) : (
            <FaRegHeart className="h-4 w-4 text-gray-700 hover:text-[#CE542C]" />
          )}
        </button>
      </div>
      
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-[#f5eee6] text-[#CE542C] font-semibold mb-2">
            {product.classification}
          </span>
          <h3 className="font-semibold text-lg text-[#2c3037] mb-1">{product.name}</h3>
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">({product.reviewCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#CE542C] font-bold text-xl">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
        <button className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold bg-[#CE542C] text-white hover:bg-[#a53e1e] transition-colors duration-200">
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};


const Shop = ({ category = 'all' }) => {

    // Sample product data
const products = [
  {
    id: 1,
    name: 'Minimalist Cotton Blazer',
    category: 'men',
    price: 149,
    originalPrice: 199,
    rating: 4,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    onSale: true,
    tags: ['SALE'],
    classification: 'Premium'
  },
  {
    id: 2,
    name: 'Ethiopian Heritage Shirt',
    category: 'ethiopia-culture',
    price: 89,
    rating: 4.5,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    classification: 'Cultural'
  },
  {
    id: 3,
    name: 'Organic Linen Trousers',
    category: 'women',
    price: 119,
    rating: 4,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1615206798678-910e30c5666a?auto=format&fit=crop&w=600&q=80',
    classification: 'Eco-Friendly'
  },
  {
    id: 4,
    name: 'Sustainable Wool Sweater',
    category: 'women',
    price: 169,
    rating: 4.8,
    reviewCount: 203,
    image: 'https://images.unsplash.com/photo-1633972767447-5098f0322a45?auto=format&fit=crop&w=600&q=80',
    classification: 'Eco-Friendly'
  },
  {
    id: 5,
    name: 'Men\'s Casual Shirt',
    category: 'men',
    price: 79,
    rating: 4.2,
    reviewCount: 87,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=600&q=80',
    classification: 'Casual'
  },
  {
    id: 6,
    name: 'Women\'s Summer Dress',
    category: 'women',
    price: 129,
    rating: 4.7,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=600&q=80',
    classification: 'Seasonal'
  },
  {
    id: 7,
    name: 'Kids Play Outfit',
    category: 'kids',
    price: 59,
    rating: 4.3,
    reviewCount: 65,
    image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=600&q=80',
    classification: 'Playwear'
  },
  {
    id: 8,
    name: 'Youth Sports Jersey',
    category: 'youth',
    price: 69,
    rating: 4.1,
    reviewCount: 53,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80',
    classification: 'Sports'
  }
];

  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWishListMessage, setShowWishListMessage] = useState(true);
  const { WishList, addToWishList } = useWishList();

  // Filter products based on the selected category
  const filteredProducts = products.filter(product => {
    if (category === 'all') return true;
    if (category === 'ethiopia-culture') return product.category === 'ethiopia-culture';
    return product.category === category;
  });

  // Check if product is in wishlist
  const isInWishList = (productId) => {
    return WishList.some(item => item.id === productId);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2c3037] mb-4 text-center">
          {category === 'all' 
            ? 'Shop All Products' 
            : `Shop ${category.charAt(0).toUpperCase() + category.slice(1)}`}
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Carefully curated collection blending modern style with heritage.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
        <div className="flex-1">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-[#CE542C] focus:ring-offset-2"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center justify-center h-10 w-10 rounded-md ${
              viewMode === 'grid' ? 'bg-[#CE542C] text-white' : 'bg-white border border-gray-300'
            }`}
          >
            <FiGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`inline-flex items-center justify-center h-10 w-10 rounded-md ${
              viewMode === 'list' ? 'bg-[#CE542C] text-white' : 'bg-white border border-gray-300'
            }`}
          >
            <FiList className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className={`gap-6 ${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'flex flex-col'
      }`}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToWishList={addToWishList}
            isInWishList={isInWishList(product.id)}
            showWishListMessage={showWishListMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
  