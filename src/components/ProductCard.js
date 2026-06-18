"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

// Renders a single product tile in the shop grid
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { slug, name, description, price, badge, placeholderColor } = product;

  return (
    <div className="group bg-card-sage rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Product image — placeholder coloured rectangle until real photo is added */}
      <Link href={`/product/${slug}`} className="block">
        <div
          className="w-full aspect-square flex items-end justify-start p-4"
          style={{ backgroundColor: placeholderColor }}
        >
          {/* Badge (e.g. "Bestseller") */}
          {badge && (
            <span className="bg-white/90 text-brand-green text-xs font-semibold px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
      </Link>

      {/* Product info */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <Link href={`/product/${slug}`}>
          <h3 className="font-display font-semibold text-brand-green text-lg leading-snug hover:underline underline-offset-2">
            {name}
          </h3>
        </Link>

        <p className="text-sm text-brand-text/70 leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-display font-bold text-accent-gold text-xl">
            ${price.toFixed(2)}
          </span>

          {/* Add to Cart — rounded-full, dark green fill */}
          <button
            onClick={() => addToCart(product)}
            className="bg-brand-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-leaf-green transition-colors duration-200 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
