/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Allganix brand palette
        "brand-green":  "#2D5016", // primary dark green
        "leaf-green":   "#5A8A1F", // secondary leaf green
        "bg-cream":     "#FAFAF6", // warm off-white background
        "card-sage":    "#F0F4E8", // light sage card surface
        "accent-gold":  "#8B6914", // warm gold accent
        "brand-text":   "#2C2C2C", // primary text
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
