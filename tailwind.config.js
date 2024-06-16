/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "custom-grey": "#E5E7EB",
      "custom-pink": "#FFF1F7",
      "custom-cartier": "#AF2257",
      "custom-dark-cartier": "#5A112D",
      "custom-dark-blue": "#0F172A",
      "white": "#FFFFFF"
    },
    fontFamily: {
      "georgia": ["Georgia", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}