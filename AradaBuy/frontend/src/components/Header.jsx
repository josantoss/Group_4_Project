import React, { useEffect, useState, useRef } from 'react';
import { FiMenu, FiHeart, FiShoppingCart, FiUser, FiChevronDown } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const shopItems = [
    { name: 'Men', link: '/shop/men' },
    { name: 'Women', link: '/shop/women' },
    { name: 'Kids', link: '/shop/kids' },
    { name: 'Youth', link: '/shop/youth' },
    { name: 'Ethiopia Culture', link: '/shop/ethiopia-culture' },
  ];

  const handleShopClick = (e) => {
    e.preventDefault();
    setIsShopOpen(!isShopOpen);
  };

  const handleShopItemClick = (link) => {
    setIsShopOpen(false);
    navigate(link);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl ml-15 font-bold bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(135deg, var(--orange), var(--dark-brown))'
              }}>
                AradaBuy
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-orange-600 transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-orange-600 transition-colors duration-200">About Us</Link>
            
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center text-gray-800 hover:text-orange-600 transition-colors duration-200 focus:outline-none"
                onClick={handleShopClick}
              >
                Shop <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${isShopOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isShopOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                  {shopItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleShopItemClick(item.link)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition">
              <FiShoppingCart className="h-5 w-5" />
            </Link>
            <Link to="/wishlist" className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition">
              <FiHeart className="h-5 w-5" />
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition">
              <FiUser className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition">
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;