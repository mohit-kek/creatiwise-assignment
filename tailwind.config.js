/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        mohit: {
          white: {
            100: "#f6f4f9",
            300: "#f5f5f5",
            500: "#eae7f2",
          },
          blue: {
            200: "#dde9ff",
            500: "#4482C2",
            800: "#2A0896",
          },
          gray: {
            400: "#666666",
            800: "#4a4a4a",
          },
          black: {
            800: "#282828",
            900: "#000000",
          }
        }
      },
      fontFamily: {
        poppins: ['Poppins'],
      }
    },
  },
  plugins: [],
}
