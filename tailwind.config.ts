import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-one": "url('/bg-one.jpg')",
        "hero-two": "url('/bg-two.jpg')",
        "hero-three": "url('/bg-three.jpg')",
      },
      boxShadow: {
        service: "0px 0px 30px rgba(0,0,0,.12)",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
