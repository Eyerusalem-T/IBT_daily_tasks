"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function Providers({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(dishName) {
    setCart((prev) => [...prev, dishName]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
