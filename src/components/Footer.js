import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

// Site footer — tagline, nav links, social icons, copyright
export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/",        label: "Home"    },
    { href: "/shop",    label: "Shop"    },
    { href: "/about",   label: "About"   },
    { href: "/contact", label: "Contact" },
  ];

  const socials = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook,  label: "Facebook",  href: "#" },
    { icon: Twitter,   label: "Twitter",   href: "#" },
  ];

  return (
    <footer className="bg-brand-green text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand tagline */}
        <div className="flex flex-col gap-3">
          <span className="font-display text-2xl font-bold text-white">Allganix</span>
          <p className="text-sm leading-relaxed text-white/60 max-w-xs">
            Rooted in nature. Grown with care. Delivered with honesty.
          </p>
        </div>

        {/* Nav links */}
        <nav>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
            Navigation
          </p>
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
            Follow Us
          </p>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-white/10 px-6 py-4">
        <p className="text-center text-xs text-white/30">
          &copy; {year} Allganix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
