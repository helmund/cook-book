/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{md,njk,sass,css}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Abril Fatface", "cursive"],
        "sans-serif": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
