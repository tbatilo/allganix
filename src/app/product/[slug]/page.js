import { products, getProductBySlug } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

// Tell Next.js which slugs to pre-render at build time
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Allganix`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);

  // Return a 404 if the slug doesn't match any product
  if (!product) notFound();

  const { name, price, badge, longDescription, placeholderColor, details } = product;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <nav className="text-xs text-brand-text/50 mb-10 flex gap-2">
        <Link href="/" className="hover:text-brand-green">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-brand-green">Shop</Link>
        <span>/</span>
        <span className="text-brand-text">{name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Product image placeholder */}
        <div
          className="w-full aspect-square rounded-2xl flex items-end justify-start p-6"
          style={{ backgroundColor: placeholderColor }}
        >
          {badge && (
            <span className="bg-white/90 text-brand-green text-sm font-semibold px-4 py-1.5 rounded-full">
              {badge}
            </span>
          )}
        </div>

        {/* Product details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-green mb-2">
              Allganix
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-green leading-snug">
              {name}
            </h1>
          </div>

          <span className="font-display text-3xl font-bold text-accent-gold">
            ${price.toFixed(2)}
          </span>

          <p className="text-brand-text/70 leading-relaxed text-sm">
            {longDescription}
          </p>

          {/* Product spec list */}
          {details && (
            <ul className="flex flex-col gap-2">
              {details.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-brand-text/80">
                  <CheckCircle size={16} className="text-leaf-green flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          )}

          {/* Add to Cart — client component so it can use the cart hook */}
          <AddToCartButton product={product} />

          <p className="text-xs text-brand-text/40">
            Free shipping on orders over $40 &middot; Free returns
          </p>
        </div>
      </div>
    </div>
  );
}
