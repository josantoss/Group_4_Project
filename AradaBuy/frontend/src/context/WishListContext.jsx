import { createContext, useContext, useState, useEffect } from 'react';

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [WishList, setWishList] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever WishList changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(WishList));
  }, [WishList]);

  const addToWishList = (product) => {
    setWishList(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <WishListContext.Provider value={{ WishList, addToWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);