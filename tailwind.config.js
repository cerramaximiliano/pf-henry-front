/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#f9fdfe",
          "200": "#121212",
          "300": "rgba(0, 0, 0, 0.56)",
        },
        darkorange: "#ff9505",
        white: "#fafdfe",
        gray: "#f9fdfe",
        black: "#121212",
        crimson: "#e93b45",
        gainsboro: "#d9d9d9"
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        impact: "Impact",
        bayon: "Bayon",
      },
    },
    fontSize: {
       "9xl": "20px",
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
