/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        max: "#90D7FF",
        luna: "#FF69B4",
        'color-1': '#FFB6C1',
        'color-2': '#ADD8E6',
        'color-3': '#90EE90',
        'color-4': '#FFFACD',
        'color-5': '#D3D3D3',
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
