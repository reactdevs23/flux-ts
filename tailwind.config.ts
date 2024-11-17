/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFA",
        secondary: "#343434",
        white: "#fff",
        black700: "#252525",
        black: "#000",
        green: "#16C66E", // Custom green color
        gray: "#D9D9D9", // Custom gray color
        yellow: "#ffbb00", // Custom yellow color
      },
      maxWidth: {
        custom: "1232px", // Custom max-width
      },
      fontSize: {
        xl: "21px", // Custom font size for xl
      },
      fontFamily: {
        sf: ["Nunito", "sans-serif"], // SF font family
        unbounded: ["Unbounded", "sans-serif"], // Unbounded font family
      },
      screens: {
        screen1340: "1341px", // Custom breakpoint for screens wider than 1340px
        screen1440: "1441px", // Custom breakpoint for screens wider than 1440px
        xs: "480px", // Custom breakpoint for screens wider than 480px
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(81deg, #52E0C4 14.79%, #9CEFFE 89.25%)", // Primary gradient background
      },
    },
  },
  plugins: [],
};
