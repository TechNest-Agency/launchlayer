import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('launchlayer-cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        // Ensure all prices are numbers
        setCart(
          Array.isArray(parsed)
            ? parsed.map((item) => ({ ...item, price: Number(item.price) }))
            : []
        );
      } catch {
        setCart([]);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('launchlayer-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => [
      ...prev,
      { ...item, price: Number(item.price) },
    ]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
