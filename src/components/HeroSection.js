import Link from "next/link";

// Decorative inline SVG leaf — pure CSS, no image dependency
function LeafAccent({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 36 C20 36 60 4 76 4"
        stroke="#5A8A1F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M76 4 C76 4 64 8 60 20 C56 32 62 36 70 30"
        stroke="#5A8A1F"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Full-width hero — the brand's opening statement
export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#2D5016" }}
    >
      {/* Textured botanical background pattern (pure CSS, no image needed) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #5A8A1F 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #8B6914 0%, transparent 40%),
                            radial-gradient(circle at 60% 80%, #5A8A1F 0%, transparent 35%)`,
        }}
      />

      {/* Decorative leaf lines — the site's signature element */}
      <LeafAccent className="absolute top-8 left-8 w-24 opacity-30" />
      <LeafAccent className="absolute bottom-8 right-8 w-32 opacity-20 rotate-180" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 text-center">

        {/* Eyebrow label */}
        <p className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-leaf-green mb-6 border border-leaf-green/40 rounded-full px-4 py-1.5">
          Certified Organic &amp; Transparently Sourced
        </p>

        {/* Main headline — the brand's thesis */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Food the Way
          <br />
          <span className="italic text-[#A8C878]">Nature Intended</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Certified organic. Transparently sourced.
          <br className="hidden md:block" />
          Delivered to your door.
        </p>

        {/* CTA */}
        <Link
          href="/shop"
          className="inline-block bg-white text-brand-green font-semibold text-sm px-8 py-4 rounded-full hover:bg-card-sage transition-colors duration-200"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
