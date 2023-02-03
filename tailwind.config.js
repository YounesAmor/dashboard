/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      "3xl": "0 0 50px",
    },
    screens: {
      sm: "375px",
      lg: "1000px",
    },
    extend: {
      backgroundImage: {
        heroDesktop: "url('/src/assets/images/bg-main-desktop.png')",
        heroMobile: "url('/src/assets/images/mobile/image-hero.jpg')",
      },
      colors: {
        lightRed: "hsl(15, 100%, 70%)",
        softBlue: "hsl(195, 74%, 62%)",
        lightRedStudy: "hsl(348, 100%, 68%)",
        limeGreen: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        softOrange: "hsl(43, 84%, 65%)",
        veryDarkBlue: "hsl(226, 43%, 10%)",
        darkBlue: "hsl(235, 46%, 20%)",
        desaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
        blue: "hsl(246, 80%, 60%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
