const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: {
          DEFAULT: "#202023",
          dark: "#18181b",
          light: "#27272A",
          lighter: "#333338",
        },
        brand: {
          ...colors.sky,
          DEFAULT: colors.sky["600"],
        },
        onBrand: {
          DEFAULT: colors.zinc["50"],
        },
      },
      textColor: {
        primary: colors.neutral["100"],
        secondary: "#FFFFFF70",
        tertiary: "#FFFFFF30",
      },
    },
  },
  plugins: [],
};
