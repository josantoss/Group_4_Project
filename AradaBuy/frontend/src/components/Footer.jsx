import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#2d3436]  text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
          {/* Company Info */}
          <div className="lg:col-span-2 ">
            <h3 className="text-2xl font-bold text-[#CE542C] mb-4">AradaBuy</h3>
            <p className="text-soft-white/80 mb-6 max-w-md">
              Celebrating Ethiopian heritage through contemporary minimalist fashion. 
              Quality, sustainability, and style for the conscious consumer.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-white/10 border-soft-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Your email address" 
                />
                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-[#CE542C] text-white hover:bg-[#CE542C] shadow-lg hover:shadow-xl transform hover:scale-105 h-10 rounded-md px-4 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-soft-white/80">
              <div className="flex items-center gap-2">
                <FiMail className="h-4 w-4" />
                <span>@aradabuy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="h-4 w-4" />
                <span>+251912131415</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="h-4 w-4" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Story', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-soft-white/80 hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Contact Us', 'Size Guide', 'Shipping Info', 'Returns'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-soft-white/80 hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Shop & Social */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 mb-6">
              {['Men', 'Women', 'Kids', 'Cultural'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-soft-white/80 hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: <FiInstagram className="h-4 w-4" />, name: 'Instagram' },
                  { icon: <FiFacebook className="h-4 w-4" />, name: 'Facebook' },
                  { icon: <FiTwitter className="h-4 w-4" />, name: 'Twitter' }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="p-2 bg-soft-white/10 rounded-full hover:bg-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-soft-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-soft-white/60 text-sm">© 2024 AradaBuy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-soft-white/60 hover:text-primary text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;