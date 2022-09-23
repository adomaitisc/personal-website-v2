/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "380px" },
    },
    extend: {
      fontFamily: {
        kngl: "Kross Neue Grotesk Light",
        kng: "Kross Neue Grotesk Book",
        kngb: "Kross Neue Grotesk Bold",
        kngh: "Kross Neue Grotesk Heavy",
      },
      height: {
        "80v": "80vh",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
