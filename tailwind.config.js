module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    // colors: {
    //   primary: "#021622",
    //   secondary: "#0FA24E",
    // },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      // textColor: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
