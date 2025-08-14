import React, { useEffect, useState } from 'react';
import { FiMenu,FiHeart, FiShoppingCart, FiUser, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shopItems = [
    { name: 'Men', link: '/shop/men' },
    { name: 'Women', link: '/shop/women' },
    { name: 'Kids', link: '/shop/kids' },
    { name: 'Youth', link: '/shop/youth' },
    { name: 'Ethiopia Culture', link: '/shop/ethiopia-culture' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/">
              <h1
                className="text-2xl ml-15 font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--orange), var(--dark-brown))'
                }}
              >
                AradaBuy
              </h1>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="text-gray-800 hover:text-orange-600 transition-colors duration-200" href="/">Home</a>
            <Link to="/about" className="text-gray-800 hover:text-orange-600 transition-colors duration-200" href="/about">About Us</Link>
            <div className="relative">
              <button
                type="button"
                className="flex items-center text-gray-800 hover:text-orange-600 transition-colors duration-200 focus:outline-none"
                onClick={() => setIsShopOpen((open) => !open)}
                onBlur={() => setTimeout(() => setIsShopOpen(false), 150)}
              >
                Shop <FiChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isShopOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                  {shopItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/cart">
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-900 hover:text-white transition">
                <FiShoppingCart className="h-5 w-5" />
              </button>
            </a>
            <a href="/WishList">
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-900 hover:text-white transition">
                <FiHeart className="h-5 w-5" />
              </button>
            </a>
            <a href="/user">
            <button className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-900 hover:text-white transition">
              <FiUser className="h-5 w-5" />
            </button>
            </a>
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

