import { useState } from 'react';
import { FiSearch, FiStar, FiShoppingCart, FiHeart, FiEye, FiGrid, FiList } from 'react-icons/fi';

const Shop = ({ category = 'all' }) => {
  // Sample product data - in a real app, this would come from an API or database
  const products = [
    {
      id: 1,
      name: 'Minimalist Cotton Blazer',
      category: 'unisex',
      price: 149,
      originalPrice: 199,
      rating: 4,
      reviewCount: 124,
      image: '/src/assets/product-blazer.jpg',
      onSale: true,
      tags: ['SALE']
    },
    {
      id: 2,
      name: 'Ethiopian Heritage Shirt',
      category: 'cultural',
      price: 89,
      rating: 4,
      reviewCount: 89,
      image: '/src/assets/product-ethiopian.jpg'
    },
    {
      id: 3,
      name: 'Organic Linen Trousers',
      category: 'unisex',
      price: 119,
      rating: 4,
      reviewCount: 156,
      image: '/src/assets/product-trousers.jpg'
    },
    {
      id: 4,
      name: 'Sustainable Wool Sweater',
      category: 'knitwear',
      price: 169,
      rating: 4,
      reviewCount: 203,
      image: '/src/assets/product-sweater.jpg'
    }
  ];

  // Filter products based on the selected category
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category.toLowerCase());

  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-600 mb-4">
          {category === 'all' ? 'Shop All Products' : `Shop ${category}`}
        </h1>
        <p className="text-black">
          Discover our complete collection of minimalist, sustainable fashion
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8 p-6 bg-white rounded-xl shadow-sm">
        <div className="flex-1">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-4 w-4" />
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background 
              file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black focus-visible:outline-none 
              focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 
              md:text-sm pl-10"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <button
          type="button"
          className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background 
          placeholder:text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed 
          disabled:opacity-50 [&>span]:line-clamp-1 w-full lg:w-48"
        >
          <span style={{ pointerEvents: 'none' }}>All Categories</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down h-4 w-4 opacity-50"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        
        <button
          type="button"
          className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm 
          ring-offset-background placeholder:text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full lg:w-48"
        >
          <span style={{ pointerEvents: 'none' }}>Featured</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down h-4 w-4 opacity-50"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background
                 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none 
                 [&_svg]:size-4 [&_svg]:shrink-0 ${viewMode === 'grid' ? 'bg-white text-white hover:bg-primary-hover shadow-md hover:shadow-lg transform hover:scale-105' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md'} h-10 w-10`}
          >
            <FiGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all 
                duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4
                 [&_svg]:shrink-0 ${viewMode === 'list' ? 'bg-black text-black hover:bg-primary-hover shadow-md hover:shadow-lg transform hover:scale-105' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md'} h-10 w-10`}
          >
            <FiList className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className={`gap-6 ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col'}`}>
        {filteredProducts.map((product, index) => (
          <div key={product.id} className={`fade-in ${viewMode === 'grid' ? '' : 'flex'}`} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover-lift ${viewMode === 'list' ? 'flex w-full' : ''}`}>
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full ${viewMode === 'list' ? 'h-full' : 'h-64'} object-cover transition-transform duration-500 group-hover:scale-105`}
                />
                {product.onSale && (
                  <div className="absolute top-3 left-3 bg-primary text-black text-xs font-semibold px-2 py-1 rounded-full">
                    {product.tags?.[0]}
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200">
                  <FiHeart className="h-4 w-4 transition-colors duration-200 text-black" />
                </button>
                <div className="absolute inset-0 bg-gray-600/50 flex items-center justify-center gap-2 transition-opacity duration-300 opacity-0
                 group-hover:opacity-100">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background 
                  transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white 
                  text-gray-600 border border-gray-600/20 hover:bg-gray-600 hover:text-soft-white shadow-lg hover:shadow-xl 
                  transform hover:scale-105 h-9 rounded-md px-3">
                    <FiEye className="h-4 w-4" />
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                <div className="mb-2">
                  <span className="text-xs text-black uppercase tracking-wide font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-600 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-black ml-2">
                    ({product.reviewCount})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-black line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-burnt-orange text-soft-white hover:bg-burnt-orange-dark shadow-lg hover:shadow-xl transform hover:scale-105 h-9 rounded-md px-3 w-full">
                  <FiShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;