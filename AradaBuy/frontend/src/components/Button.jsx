// src/components/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  href,
  onClick,
  type = 'button',
  ...props
}) => {
  // Base button classes
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CE542C]';
  
  // Variant classes
  const variants = {
    primary: 'bg-[#CE542C] text-white hover:bg-[#a53e1e]',
    secondary: 'bg-white text-[#2c3037] border border-[#2c3037]/20 hover:bg-gray-900 hover:text-white',
    outline: 'border border-white text-white hover:bg-white hover:text-black',
    ghost: 'bg-transparent text-[#CE542C] hover:bg-[#f5eee6]',
    dark: 'bg-[#2c3037] text-white hover:bg-[#1a1d23]'
  };
  
  // Size classes
  const sizes = {
    small: 'px-3 py-1.5 text-sm h-8',
    medium: 'px-4 py-2 text-sm h-10',
    large: 'px-6 py-3 text-base h-12'
  };
  
  // Icon size classes
  const iconSizes = {
    small: 'h-3 w-3',
    medium: 'h-4 w-4',
    large: 'h-5 w-5'
  };
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Icon component if provided
  const iconComponent = Icon && (
    <Icon className={`${iconSizes[size]} ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`} />
  );
  
  // Render as Link if href is provided
  if (href) {
    return (
      <Link
        to={href}
        className={buttonClasses}
        {...props}
      >
        {iconPosition === 'left' && iconComponent}
        {children}
        {iconPosition === 'right' && iconComponent}
      </Link>
    );
  }
  
  // Regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {iconPosition === 'left' && iconComponent}
      {children}
      {iconPosition === 'right' && iconComponent}
    </button>
  );
};

export default Button;