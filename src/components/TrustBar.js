import { Leaf, ShieldCheck, RefreshCw, Package } from "lucide-react";

// Four trust pillars displayed as an icon strip below the hero
const pillars = [
  {
    icon: Leaf,
    title: "100% Organic",
    subtitle: "Every ingredient certified",
  },
  {
    icon: ShieldCheck,
    title: "Non-GMO Verified",
    subtitle: "Independently tested",
  },
  {
    icon: RefreshCw,
    title: "Free Returns",
    subtitle: "No questions asked",
  },
  {
    icon: Package,
    title: "Eco Packaging",
    subtitle: "Plastic-free, compostable",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-card-sage border-y border-leaf-green/20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-leaf-green/20">
        {pillars.map(({ icon: Icon, title, subtitle }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-2 px-4"
          >
            <Icon
              size={28}
              strokeWidth={1.5}
              className="text-brand-green"
            />
            <span className="font-display font-semibold text-brand-green text-base">
              {title}
            </span>
            <span className="text-xs text-brand-text/60">{subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
