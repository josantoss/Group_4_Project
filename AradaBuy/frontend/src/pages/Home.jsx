import React from 'react';
import { useState, useEffect } from 'react';
import { FiShield, FiStar, FiShoppingCart, FiFeather,FiCheck } from 'react-icons/fi';
import { FaStar,FaHeart } from 'react-icons/fa';
import SplitText from '../components/SplitText';
import { useWishList } from '../context/WishListContext';


// Hero section component
const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#2c3037]" 
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=80)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}>
      <div className="relative z-10 text-center text-orange-500 px-4 max-w-3xl mx-auto">
        <SplitText
          text="New Season, New You"
          className="text-7xl font-semibold text-center text-white"
          delay={20}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover our latest collection of minimalist, unisex clothing that celebrates both modern style and Ethiopian cultural heritage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/shop">
            <button
              className="bg-white text-[#2c3037] border border-[#2c3037]/20 font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
              style={{ minWidth: 160 }}
            >
              Shop Now
            </button>
          </a>
          <a href="/shop">
            <button
              className="border border-white text-white px-8 py-3 rounded-md transition-all hover:bg-white hover:text-black font-semibold"
              style={{ minWidth: 160 }}
            >
              Explore Collection
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

const FeaturedProductsSection = () => {
  const { WishList, addToWishList } = useWishList();
  const [showWishListMessage, setShowWishListMessage] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Minimalist Cotton Blazer',
      price: 149,
      originalPrice: 199,
      rating: 4,
      reviewCount: 124,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      onSale: true,
      classification: 'Premium'
    },
    {
      id: 2,
      name: 'Ethiopian Heritage Shirt',
      price: 89,
      rating: 4.5,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      classification: 'Cultural'
    },
    {
      id: 3,
      name: 'Organic Linen Trousers',
      price: 119,
      rating: 4,
      reviewCount: 156,
      image: 'https://images.unsplash.com/photo-1615206798678-910e30c5666a?auto=format&fit=crop&w=600&q=80',
      classification: 'Eco-Friendly'
    },
    {
      id: 4,
      name: 'Sustainable Wool Sweater',
      price: 169,
      rating: 4.8,
      reviewCount: 203,
      image: 'https://images.unsplash.com/photo-1633972767447-5098f0322a45?auto=format&fit=crop&w=600&q=80',
      classification: 'Eco-Friendly'
    }
  ];

  const isInWishList = (productId) => {
    return WishList.some(item => item.id === productId);
  };

  const handleWishListClick = (product) => {
    addToWishList(product);
    setShowWishListMessage(true);
    setTimeout(() => setShowWishListMessage(false), 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2c3037] mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium and cultural items.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            const isWishListed = isInWishList(product.id);
            return (
              <div 
                key={product.id}
                className="relative bg-white rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-200 
                hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Wishlist button */}
                <button 
                  onClick={() => handleWishListClick(product)}
                  className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200 z-10"
                >
                  {isWishListed ? (
                    <FaHeart className="h-4 w-4 text-[#CE542C]" />
                  ) : (
                    <FaHeart className="h-4 w-4 text-gray-700 hover:text-[#CE542C]" />
                  )}
                </button>

                {/* Wishlist added message */}
                {showWishListMessage && hoveredProduct === product.id && isWishListed && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md flex 
                  items-center gap-2 z-10 animate-bounce">
                    <FiCheck /> Added to wishlist!
                  </div>
                )}

                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={`h-48 w-full object-cover transition-transform duration-500 ${hoveredProduct === product.id ? 'scale-105' : 'scale-100'}`}
                  />
                  {product.onSale && (
                    <div className="absolute top-3 left-3 bg-[#CE542C] text-white text-xs font-semibold px-2 py-1 rounded-full">
                      SALE
                    </div>
                  )}
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
          })}
        </div>
      </div>
    </section>
  );
};


// Style wrapped section
const StyleWrappedSection = () => {
  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 fade-in">
            Your Style Wrapped
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Discover your unique fashion fingerprint and see how your style has evolved with AradaBuy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Favorite Color Card */}
          <div className="rounded-lg text-card-foreground bg-soft-white hover-lift border-0 shadow-sm hover:shadow-md transition-all duration-300" style={{ animationDelay: "0s" }}>
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
              <div className="flex items-center justify-between">
                <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Favorite Color</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette h-5 w-5 text-primary">
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-charcoal mb-1">Burnt Orange</div>
              <p className="text-sm text-muted-foreground">60% of your purchases</p>
            </div>
          </div>

          {/* Most loved style card */}
          <div className="rounded-lg text-card-foreground bg-soft-white hover-lift border-0 shadow-sm hover:shadow-md transition-all duration-300" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
              <div className="flex items-center justify-between">
                <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Most Loved Style</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-heart h-5 w-5 text-red-500">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-charcoal mb-1">Minimalist</div>
              <p className="text-sm text-muted-foreground">Ethiopian Cultural</p>
            </div>
          </div>

          {/* Total Purchases Card */}
          <div className="rounded-lg text-card-foreground bg-soft-white hover-lift border-0 shadow-sm hover:shadow-md transition-all duration-300" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
              <div className="flex items-center justify-between">
                <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Total Purchases</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-5 w-5 text-green-500">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-charcoal mb-1">24</div>
              <p className="text-sm text-muted-foreground">Items this year</p>
            </div>
          </div>

          {/* Style Score Card */}
          <div className="rounded-lg text-card-foreground bg-soft-white hover-lift border-0 shadow-sm hover:shadow-md transition-all duration-300" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
              <div className="flex items-center justify-between">
                <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Style Score</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-5 w-5 text-blue-500">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-charcoal mb-1">92%</div>
              <p className="text-sm text-muted-foreground">Fashion compatibility</p>
            </div>
          </div>
        </div>

        {/* Style Insights Section */}
        <div className="mt-12 bg-soft-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-charcoal mb-4">Style Insights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-charcoal mb-2">Color Palette Preference</h4>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-[#CE542C] rounded-full"></div>
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <div className="w-6 h-6 bg-warm-beige rounded-full border border-border"></div>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                You gravitate towards warm, earthy tones that reflect your sophisticated taste.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-2">Shopping Patterns</h4>
              <p className="text-sm text-muted-foreground mb-2">
                You prefer quality over quantity, with an average of 2 items per month.
              </p>
              <p className="text-sm text-muted-foreground">
                Ethiopian cultural pieces make up 30% of your wardrobe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Shop by Category Section
const ShopByCategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "Men's Collection",
      description: "Sophisticated essentials for the modern gentleman",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&h=400&fit=crop",
      delay: "0s"
    },
    {
      id: 2,
      title: "Women's Collection",
      description: "Elegant pieces that celebrate feminine strength",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop",
      delay: "0.1s"
    },
    {
      id: 3,
      title: "Kids & Youth",
      description: "Comfortable, stylish clothing for the next generation",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      delay: "0.2s"
    },
    {
      id: 4,
      title: "Ethiopian Cultural",
      description: "Traditional designs reimagined for contemporary life",
      image: "https://images.unsplash.com/photo-1599584083055-3793a057b6de?w=600&h=400&fit=crop",
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 fade-in">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Explore our diverse collections designed for every style and occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-lg text-white hover:shadow-xl transition-all duration-500 hover-lift"
              style={{ animationDelay: category.delay }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-soft-white">
                <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {category.title}
                </h3>
                <p className="text-soft-white/90 mb-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {category.description}
                </p>
                <a href="/shop">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                  disabled:opacity-50 bg-white text-black border border-white hover:bg-charcoal hover:text-white shadow-lg 
                  hover:shadow-xl hover:scale-105 h-10 px-4 py-2 transform transition-all duration-300 group-hover:translate-y-[-4px] 
                  group-hover:scale-105">
                    Shop Now
                  </button>
                </a>
              </div>

              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main home component
const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProductsSection />
      <StyleWrappedSection />
      <ShopByCategorySection />
    </main>
  );
};

export default Home;