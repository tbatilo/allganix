"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

// Separated into its own client component so the product page can remain a server component
export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    // Reset label after 1.5 s
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleAdd}
      className="bg-brand-green text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-leaf-green transition-colors duration-200 active:scale-95 w-full md:w-auto"
    >
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}
