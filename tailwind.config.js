/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{md,njk,sass,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Abril Fatface", "cursive"],
        serif: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
