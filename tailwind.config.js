module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        72: "18rem",
        88: "22rem",
        92: "23rem",
        96: "24rem",
      },
      fontFamily: {
        custom: ["Kumbh Sans", "sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
