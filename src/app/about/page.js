export const metadata = {
  title: "About — Allganix",
  description: "The story behind Allganix — why we started and what we stand for.",
};

// Decorative botanical SVG
function SprigIcon() {
  return (
    <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-auto" aria-hidden="true">
      <path d="M20 58 C20 58 20 10 20 2" stroke="#5A8A1F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 30 C20 30 8 22 4 12" stroke="#5A8A1F" strokeWidth="1" strokeLinecap="round" />
      <path d="M20 22 C20 22 32 14 36 4" stroke="#5A8A1F" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="12" cy="20" rx="8" ry="5" fill="#5A8A1F" opacity="0.2" transform="rotate(-30 12 20)" />
      <ellipse cx="28" cy="12" rx="8" ry="5" fill="#5A8A1F" opacity="0.2" transform="rotate(30 28 12)" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="bg-card-sage border-b border-leaf-green/20">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <SprigIcon />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-green mt-6 mb-6">
            Grown with intention.
            <br />
            <span className="italic">Sold with honesty.</span>
          </h1>
          <p className="text-brand-text/60 text-base leading-relaxed">
            Allganix started at a farmers market table with a single question:
            why is it so hard to know exactly where your food comes from?
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-sm max-w-none text-brand-text/80 leading-relaxed space-y-6 text-[15px]">

          <h2 className="font-display text-2xl font-bold text-brand-green not-prose">
            The Story
          </h2>
          <p>
            We launched Allganix because we believed the organic food market had
            a transparency problem. "Organic" appeared on more and more labels, but
            the supply chains behind those labels remained as opaque as ever.
            Certifications became checkboxes rather than commitments.
          </p>
          <p>
            So we built something different: a direct relationship between small
            certified farms and people who want to eat well. No middlemen obscuring
            origins. No inflated markups. Just food, and the story behind it.
          </p>

          <h2 className="font-display text-2xl font-bold text-brand-green not-prose mt-10">
            Our Standards
          </h2>
          <p>
            Every supplier in our network is USDA Certified Organic and visited
            in person before any product reaches our catalogue. We publish the farm
            name and location for every SKU — you can trace each ingredient to the
            soil it grew in.
          </p>
          <p>
            We use 100% plastic-free packaging: glass jars, paper bags, and
            compostable mailers. Our logistics partner is carbon-neutral, and we
            plant one tree for every order shipped through our reforestation partner
            in the Pacific Northwest.
          </p>

          <h2 className="font-display text-2xl font-bold text-brand-green not-prose mt-10">
            What's Next
          </h2>
          <p>
            We're a small team and proud of it. As we grow, we're committed to
            keeping our supplier list audited, our packaging honest, and our prices
            fair to both farmer and customer. If you have a question about anything
            in our catalogue, just ask — transparency isn't a marketing value here,
            it's a practice.
          </p>
        </div>
      </section>

      {/* Values row */}
      <section className="bg-brand-green text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { heading: "Traceable",  body: "Every ingredient linked to a named farm and location."   },
            { heading: "Seasonal",   body: "We stock what's in season — fresher food, lower miles."  },
            { heading: "Accountable",body: "We publish our supply chain. Read it any time."           },
          ].map(({ heading, body }) => (
            <div key={heading} className="flex flex-col gap-3">
              <h3 className="font-display text-xl font-bold text-white">{heading}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
