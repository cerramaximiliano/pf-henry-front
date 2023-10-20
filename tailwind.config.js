/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkorange: "#ff9505",
        whitem: "#f9fdfe",
        graym: "#3d3d3d",
        blackm: "#121212",
        crimson: "#e93b45",
      },
      spacing: {},
      fontFamily: {
        roboto: "roboto",
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
