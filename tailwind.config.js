/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        backGroundColor: "var(--background-color)",
        altBackGroundColor: "var(--alt-background-color)",
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        primaryTextColor: "var(--primary-text-color)",
        secondaryTextColor: "var(--secondary-text-color)"
        



       
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

