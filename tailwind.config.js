/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/js/script.js"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
      },
      fontFamily: {
        primary: [],
        secondary: [],
      },
    },
  },
  plugins: [require("daisyui")],
};
