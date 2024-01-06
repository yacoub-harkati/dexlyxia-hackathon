/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        max: "#90D7FF",
        luna: "#FF69B4",
      },
      gradients: {
        "radial-luna": ["circle", "white", "#FF69B4"],
      },
      backgroundImage: {
        patterns: 'url("/src/assets/bg.webp")',
      },
    },
  },
  plugins: [],
};
