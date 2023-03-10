const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: {
          DEFAULT: "#141824",
          dark: "#10141E",
          light: "#171D2B",
          lighter: "#1E2638",
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
