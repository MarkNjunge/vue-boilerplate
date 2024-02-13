import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: {
          DEFAULT: "#202023"
        },
        surface: {
          DEFAULT: "#27272A",
          border: "#2C2C30"
        },
        brand: {
          ...colors.sky,
          DEFAULT: colors.sky["600"],
        },
        onBrand: {
          DEFAULT: colors.zinc["50"],
        },
        input: {
          DEFAULT: "#27272A",
          border: "#2C2C30",
          focus: "#4C4C52"
        },
        scrollbar: {
          thumb: "#3B3B40",
          track: "#27272A"
        }
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
