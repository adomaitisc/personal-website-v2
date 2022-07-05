/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kngl: "Kross Neue Grotesk Light",
        kng: "Kross Neue Grotesk Book",
        kngb: "Kross Neue Grotesk Bold",
      },
      height: {
        "92v": "92vh",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
