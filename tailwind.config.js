/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#047047", // Primary Brand Color
          accent: "#bb9146", // Secondary/Link Color
          dark: "#024d31", // Darker shade for hover/active
          light: "#e6f4ef", // Light background tint
          gold: {
            DEFAULT: "#bb9146",
            light: "#fdf3e3", // Light gold tint for backgrounds
            dark: "#8f6e33",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
