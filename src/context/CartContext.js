"use client";

import { createContext, useContext, useState } from "react";

// Cart context — provides cart state and helpers to every component
const CartContext = createContext(null);

export function CartProvider({ children }) {
  // items: array of { product, quantity }
  const [items, setItems] = useState([]);

  // Add one unit of a product; if already in cart, increment quantity
  function addToCart(product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  // Total number of items across all products
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, totalCount }}>
      {children}
    </CartContext.Provider>
  );
}

// Convenience hook
export function useCart() {
  return useContext(CartContext);
}
