/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { vaz: ["vaz"] },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
