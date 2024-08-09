import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCartItems);
    updateCartCount(savedCartItems);
  }, []);

  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
    updateCartCount(newCartItems);
  };

  const updateCartCount = (items) => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };

  const getCartCount = () => cartCount;

  return <CartContext.Provider value={{ cartItems, updateCart, getCartCount }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
