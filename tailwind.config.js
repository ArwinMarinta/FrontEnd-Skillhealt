/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        RED01: "#B40000",
        RED02: "#740A0A",
        YELLOW01: "#EBFF00",
        YELLOW02: "#ECF00F",
        GRAY01: "#F1F5F8",
        GRAY02: "#D0D0D0",
        GREEN01: "#30BA00",
      },
    },
  },
  plugins: [],
};
