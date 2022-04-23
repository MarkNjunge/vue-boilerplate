const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: {
          ...colors.neutral,
          DEFAULT: colors.neutral["800"],
          dark: colors.neutral["900"],
          light: colors.neutral["700"],
          lighter: colors.neutral["600"],
        },
        brand: {
          ...colors.indigo,
          DEFAULT: colors.indigo["600"],
        },
        onBrand: {
          DEFAULT: colors.zinc["200"],
        },
      },
      textColor: {
        primary: colors.neutral["200"],
        secondary: colors.neutral["400"],
        tertiary: colors.neutral["500"],
      },
    },
  },
  plugins: [],
};
