/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xxs: "0.6rem",
      xs: "0.7rem",
      sm: "0.8rem",
      md: "0.9rem",
      base: "1rem",
      lg: "1.1rem",
      xl: "1.25rem",
      "2xl": "1.4rem",
      "3xl": "1.7rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem"
    },
    extend: {
      animation: {
        fade: "fadeIn 0.3s",
        modalOpen: "fadeIn 0.3s, fall 0.3s",
        snackbar: "fadeIn 0.5s, fadeOut 0.5s 2.6s"
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        },
        fall: {
          from: { transform: "translateY(-10%)" },
          to: { transform: "translateY(0%)" }
        }
      },
      colors: {
        "black-1": "rgb(38, 38, 38);",
        "black-1-t": "rgba(38, 38, 38, 0.7);",
        "white-1": "rgb(218, 218, 218);",
        "white-1-t": "rgba(218, 218, 218, 0.7);",
        blue: { DEFAULT: "hsl(218, 52%, 51.8%)" },
        blueHover: { DEFAULT: "hsl(218, 52%, 65%)" },
        transparent: "rgba(0, 0, 0, 0.0);"
      },
      fontFamily: {
        expletusSans: ["Expletus Sans", "cursive"]
      }
    }
  },
  plugins: []
};
