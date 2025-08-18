import { useState, useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiHeart, FiGrid, FiList, FiChevronDown, FiCheck } from 'react-icons/fi';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useWishList } from '../context/WishListContext';
import { useCart } from '../context/CartContext';


const ProductCard = ({ 
  product,  
  onAddToWishList, 
  isInWishList,
  showWishListMessage,
  onAddToCart
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

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div 
      className="relative bg-white rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-200 
      hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist added message */}
      {showAddedMessage && showWishListMessage && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md flex 
        items-center gap-2 z-10 animate-bounce">
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
        <button 
          onClick={handleAddToCart}
          className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold bg-[#CE542C] text-white hover:bg-[#a53e1e] transition-colors duration-200"
        >
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};


const Shop = ({ category = 'all' }) => {
  const {addToCart} = useCart();
    // Sample product data
const products = [
  {
    id: 1,
    name: 'Minimalist Cotton Blazer',
    category: 'men',
    price: 1490,
    originalPrice: 1990,
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
    price: 850,
    rating: 4.5,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1558642843-d6351b0ccf51?auto=format&fit=crop&w=600&q=80',
    classification: 'Cultural'
  },
  {
    id: 3,
    name: 'Organic Linen Trousers',
    category: 'women',
    price: 1100,
    rating: 4,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1615206798678-910e30c5666a?auto=format&fit=crop&w=600&q=80',
    classification: 'Eco-Friendly'
  },
  {
    id: 4,
    name: 'Sustainable Wool Sweater',
    category: 'women',
    price: 1700,
    rating: 4.8,
    reviewCount: 203,
    image: 'https://images.unsplash.com/photo-1687275162316-a7aa04b036d3?auto=format&fit=crop&w=600&q=80',
    classification: 'Eco-Friendly'
  },
  {
    id: 5,
    name: 'Men\'s Casual Shirt',
    category: 'men',
    price: 750,
    rating: 4.2,
    reviewCount: 87,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=600&q=80',
    classification: 'Casual'
  },
  {
    id: 6,
    name: 'Women\'s Dress',
    category: 'women',
    price: 1800,
    rating: 4.7,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=600&q=80',
    classification: 'Seasonal'
  },
  {
    id: 7,
    name: 'Kids Play Outfit',
    category: 'kids',
    price: 2000,
    rating: 4.3,
    reviewCount: 65,
    image: 'https://plus.unsplash.com/premium_photo-1675183690347-662b2f9f3cf7?auto=format&fit=crop&w=600&q=80',
    classification: 'Playwear'
  },
  {
    id: 8,
    name: 'Sports Jersey',
    category: 'youth',
    price: 1800,
    rating: 4.1,
    reviewCount: 53,
    image: 'https://images.unsplash.com/photo-1552066379-e7bfd22155c5?auto=format&fit=crop&w=600&q=80',
    classification: 'Sports'
  }
];

  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWishListMessage, setShowWishListMessage] = useState(true);
  const { WishList, addToWishList } = useWishList();
  const [sortOption, setSortOption] = useState('default');
  const [isSortOpen, setIsSortOpen] = useState(false);



  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const categoryMatch = 
      category === 'all' ? true :
      category === 'ethiopia-culture' ? 
        product.category === 'ethiopia-culture' : 
        product.category === category;
    
    const searchMatch = 
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.classification.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low-high': return a.price - b.price;
      case 'price-high-low': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
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
            : `Shop For ${category.charAt(0).toUpperCase() + category.slice(1)}`}
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
        
        <div className="flex gap-2 items-center">
          {/* Sort dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 h-10 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <span>Sort</span>
              <FiChevronDown className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="py-1">
                  <button 
                    onClick={() => {
                      setSortOption('default');
                      setIsSortOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${sortOption === 'default' ? 'bg-gray-100 text-[#CE542C]' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Default
                  </button>
                  <button 
                    onClick={() => {
                      setSortOption('price-low-high');
                      setIsSortOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${sortOption === 'price-low-high' ? 'bg-gray-100 text-[#CE542C]' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Price: Low to High
                  </button>
                  <button 
                    onClick={() => {
                      setSortOption('price-high-low');
                      setIsSortOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${sortOption === 'price-high-low' ? 'bg-gray-100 text-[#CE542C]' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Price: High to Low
                  </button>
                  <button 
                    onClick={() => {
                      setSortOption('rating');
                      setIsSortOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${sortOption === 'rating' ? 'bg-gray-100 text-[#CE542C]' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Highly Rated
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* View mode buttons */}
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

      {sortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">Sorry, no items found matching your search.</p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSortOption('default');
            }}
            className="mt-4 px-6 py-2 bg-[#CE542C] text-white rounded-md hover:bg-[#a53e1e] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className={`gap-6 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'flex flex-col'
        }`}>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onAddToWishList={addToWishList}
              isInWishList={isInWishList(product.id)}
              showWishListMessage={showWishListMessage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;