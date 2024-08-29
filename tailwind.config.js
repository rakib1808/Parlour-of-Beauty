/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./HtmlFile/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};

