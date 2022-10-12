/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "msu-red": "#d21338",
      },
      boxShadow: {
        n4: "0px 1px 4px rgba(0, 0, 0, 0.16)",
        n5: "0px 3px 8px rgba(0, 0, 0, 0.24)",
        header: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      },
      gridTemplateColumns: {
        "fit-2": "repeat(auto-fit, minmax(700px, 1fr))",
      },
      backgroundImage: {
        "background-circles": "url('./assets/background-cirlces-accent.svg')",
        "register-blob": "url('./assets/register-blob.svg')",
        "red-star": "url(./assets/red-star-icon.svg)",
      },
      screens: {
        lg: "1460px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#d21338",
        },
      },
    ],
  },
};
