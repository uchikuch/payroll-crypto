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
        "crypto-orange": "#FF754C",
        "crypto-blue-text": "#2522BA",
        "crypto-lightorange": "#FFEDDC",
        "crypto-lightpurple": "#DBDEFF",
        "crypto-lightcyan": "#DBF8FF",
        "crypto-gray-bg": "#ECF2F6",
      },
      zIndex: {
        "-10": "-10",
      },
      height: {
        overview: "34rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "4rem",
      },
      backgroundImage: {
        "overview-pattern": "url('/src/assets/images/overview-bg.png')",
        login: "url('/src/assets/images/login.png')",
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
    containerL: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1224px",
        xl: "1424px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
