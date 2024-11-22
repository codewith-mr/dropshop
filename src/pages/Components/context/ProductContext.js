import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (Product) => {
    setProducts((prevProducts) => [Product, ...prevProducts]);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, cart, addToCart, removeFromCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
