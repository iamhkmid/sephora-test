/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        loader: "loader 1300ms infinite",
      },
      keyframes: {
        loader: {
          0: {
            opacity: 1,
          },
          "30%": {
            opacity: 0.3,
          },
          "70%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
