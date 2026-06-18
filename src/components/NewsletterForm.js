"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-5 py-3 rounded-full border border-leaf-green/30 bg-card-sage text-sm text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:ring-2 focus:ring-brand-green/30"
      />
      <button
        type="submit"
        className="bg-brand-green text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-leaf-green transition-colors duration-200 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
