// Starter product catalogue — replace images with real photos when ready
export const products = [
  {
    id: 1,
    slug: "raw-wildflower-honey",
    name: "Raw Wildflower Honey",
    price: 14.99,
    badge: "Bestseller",
    description: "Unfiltered, raw honey from certified organic hives.",
    longDescription:
      "Harvested from wildflower meadows where our bees roam freely, this honey is never heated above the hive's natural temperature. That means every jar retains its full spectrum of enzymes, antioxidants, and natural pollen — the way nature made it. Rich amber colour, subtly floral, with a satisfying crystalline texture that sets it apart from commercial varieties.",
    category: "sweeteners",
    image: "/images/honey.jpg",
    // Placeholder colour shown when the real photo is missing
    placeholderColor: "#C8922A",
    details: ["250 g (8.8 oz)", "USDA Certified Organic", "Single-origin"],
  },
  {
    id: 2,
    slug: "cold-pressed-coconut-oil",
    name: "Cold-Pressed Coconut Oil",
    price: 18.99,
    badge: "Certified Organic",
    description: "Virgin, cold-pressed from fresh organic coconuts.",
    longDescription:
      "Extracted within hours of harvest using a single cold-press cycle, our coconut oil preserves the coconut's natural lauric acid and medium-chain fatty acids. No refining, no bleaching, no deodorising — just pure, unaltered oil with a delicate fresh-coconut aroma. Use it for cooking, baking, or as a skin and hair treatment.",
    category: "oils",
    image: "/images/coconut-oil.jpg",
    placeholderColor: "#E8DCC8",
    details: ["500 ml (16.9 fl oz)", "USDA Certified Organic", "Cold-pressed, unrefined"],
  },
  {
    id: 3,
    slug: "ancient-grain-quinoa",
    name: "Ancient Grain Quinoa",
    price: 11.49,
    badge: "Non-GMO",
    description: "Tri-color quinoa, sustainably grown in the Andes.",
    longDescription:
      "Grown by smallholder farmers in the Bolivian altiplano at elevations above 3,800 m, our tri-colour quinoa is a blend of white, red, and black varieties — each with a slightly different texture that creates a more interesting eating experience. A complete protein containing all nine essential amino acids, naturally gluten-free, and rinsed to remove any residual saponins.",
    category: "grains",
    image: "/images/quinoa.jpg",
    placeholderColor: "#B8A878",
    details: ["500 g (17.6 oz)", "Non-GMO Project Verified", "Sustainably traded"],
  },
];

// Helper: find a product by its URL slug
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null;
}
