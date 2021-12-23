module.exports = {
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Space Grotesk", "sans-serif"],
      secondary: ["Inter", "system-ui", "sans-serif"],
      tertiary: [],
    },
    colors: {
      bg: "#2F1893",
      white: "#ffffff",
      primary: "#25DAC5",
      grey: {
        50: "#F8F8F8",
        primary: "#333333",
        secondary: "#787676",
      },
    },
  },
  plugins: [],
};
