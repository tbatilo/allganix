import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Shop — Allganix",
  description: "Browse our full range of certified organic products.",
};

export default function ShopPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Page header */}
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-green mb-2">
          The Full Range
        </p>
        <h1 className="font-display text-4xl font-bold text-brand-green">
          Shop All Products
        </h1>
        <p className="text-brand-text/60 mt-3 text-sm max-w-md">
          Every item is certified organic and traceable to its source. No compromises.
        </p>
      </div>

      {/* Category filter — static labels for now, wired up when filtering is added */}
      <div className="flex flex-wrap gap-2 mb-10">
        {["All", "Sweeteners", "Oils", "Grains"].map((cat) => (
          <button
            key={cat}
            className="text-sm px-5 py-2 rounded-full border border-leaf-green/30 text-brand-text hover:border-brand-green hover:text-brand-green transition-colors duration-150 first:bg-brand-green first:text-white first:border-brand-green"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid — sourced from /src/data/products.js */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
