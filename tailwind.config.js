module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "crypto-purple": "#6C5DD3",
        "crypto-yellow": "#FFDC60",
        "crypto-pink": "#FAB8C4",
        "crypto-lightblue": "#70C8E1",
        "crypto-green": "#66BF8B",
        "crypto-black": "#27272E",
        "crypto-blue-text": "#2522BA",
        "crypto-lightorange": "#FFEDDC",
        "crypto-lightpurple": "#DBDEFF",
        "crypto-lightcyan": "#DBF8FF",
      },
      zIndex: {
        "-10": "-10",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "4rem",
      },
    },
    fontFamily: {
      Poppins: ["DM+Sans, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
