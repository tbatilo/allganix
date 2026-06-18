import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";
import { products } from "@/data/products";

// Decorative botanical SVG line — the site's signature flourish
function BotanicalLine() {
  return (
    <svg
      viewBox="0 0 120 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 mx-auto my-2"
      aria-hidden="true"
    >
      <path d="M10 10 Q60 2 110 10" stroke="#5A8A1F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <circle cx="60" cy="6" r="2" fill="#8B6914" opacity="0.6" />
    </svg>
  );
}

export default function HomePage() {
  // Show the first three products as a teaser on the homepage
  const featured = products.slice(0, 3);

  return (
    <>
      <HeroSection />
      <TrustBar />

      {/* Featured products section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-green mb-3">
            From Our Shelves
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-green">
            Featured Products
          </h2>
          <BotanicalLine />
          <p className="text-brand-text/60 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Every product is selected for its integrity — from soil to shelf.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block bg-brand-green text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-leaf-green transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Brand values strip */}
      <section className="bg-brand-green text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-green mb-4">
              Our Promise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Nothing hidden.
              <br />
              <span className="italic text-[#A8C878]">Nothing unnecessary.</span>
            </h2>
            <p className="text-white/70 leading-relaxed text-sm max-w-sm">
              We publish the name and location of every supplier we work with.
              You can trace every ingredient back to the farm it came from —
              because trust should be earned, not assumed.
            </p>
          </div>

          {/* Simple stat block */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { stat: "100%", label: "Certified organic ingredients" },
              { stat: "12+",  label: "Verified supplier farms" },
              { stat: "0",    label: "Artificial additives" },
              { stat: "B",    label: "Corp-pending status" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-white/10 rounded-2xl p-6 flex flex-col gap-1"
              >
                <span className="font-display text-3xl font-bold text-white">
                  {stat}
                </span>
                <span className="text-xs text-white/50 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / final CTA */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-green mb-3">
          Stay in Season
        </p>
        <h2 className="font-display text-3xl font-bold text-brand-green mb-4">
          Join the Allganix community
        </h2>
        <p className="text-brand-text/60 text-sm mb-8">
          Recipes, sourcing stories, and exclusive offers — no noise, just good food.
        </p>
        <NewsletterForm />
      </section>
    </>
  );
}
