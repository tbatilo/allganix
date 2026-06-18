import Link from "next/link";

// Shown when a route (e.g. a bad product slug) returns notFound()
export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center flex flex-col items-center gap-6">
      <span className="font-display text-8xl font-bold text-card-sage">404</span>
      <h1 className="font-display text-2xl font-bold text-brand-green">
        Page not found
      </h1>
      <p className="text-brand-text/60 text-sm">
        This page may have moved or doesn't exist yet.
      </p>
      <Link
        href="/"
        className="bg-brand-green text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-leaf-green transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
