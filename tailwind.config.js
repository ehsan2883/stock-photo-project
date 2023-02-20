/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "580px",
      // => @media (min-width: 640px) { ... }

      md: "640px",
      // => @media (min-width: 1024px) { ... }

      lg: "950px",
      // => @media (min-width: 1280px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
