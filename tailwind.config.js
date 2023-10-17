/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkorange: "#ff9505",
        white: "#fafdfe",
        gray: "#f9fdfe",
        black: "#121212",
        crimson: "#e93b45",
      },
      spacing: {},
      fontFamily: {
        impact: "Impact",
        bayon: "Bayon",
      },
    },
    fontSize: {
      "10xl": "25px",
      "30xl": "30px",
      "31xl": "50px",
      "21xl": "40px",
      "51xl": "70px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
