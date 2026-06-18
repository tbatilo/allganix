"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

// Sticky top navigation bar
export default function Navbar() {
  const { totalCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/",        label: "Home"    },
    { href: "/shop",    label: "Shop"    },
    { href: "/about",   label: "About"   },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg-cream/95 backdrop-blur-sm border-b border-leaf-green/20">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-bold text-brand-green tracking-wide"
        >
          Allganix
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-brand-text hover:text-brand-green transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart icon */}
        <Link href="/shop" className="relative hidden md:flex items-center text-brand-text hover:text-brand-green transition-colors">
          <ShoppingCart size={22} />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </Link>

        {/* Mobile: hamburger + cart */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/shop" className="relative text-brand-text">
            <ShoppingCart size={22} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-brand-text hover:text-brand-green"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-cream border-t border-leaf-green/20 px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-brand-text hover:text-brand-green"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
