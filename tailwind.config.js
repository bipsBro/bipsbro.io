/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  plugins: [],
};
