/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-nav": "cubic-bezier(0.78,0.14,0.15,0.86)",
      },
      transitionProperty: {
        width: "width",
      },

      boxShadow: {
        leftShadow: "-2px 0 8px rgb(0 0 0 / 15%)",
      },
      minWidth: {
        "1/3": "33.333%",
      },

      minHeight: {
        90: "90vh",
      },
      width: {
        18: "4.5rem",
        100: "26rem",
        "28%": "28%",
        "40vw": "40vw",
        "60vw": "58.7vw",
      },
      height: {
        76: "18.5rem",
        100: "24rem",
        106: "26rem",
        110: "28rem",
        116: "30rem",
        "91%": "91%",
      },
    },
  },
  plugins: [],
};
