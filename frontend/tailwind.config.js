/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1167FF",
        dark: "#191C1F",
        light: "#F3F4F5",
        secondary: "#DAE7FF",
        tertiary: "#75A6FF",
        pink: "#D308FF"
      },
    },
  },
  plugins: [],
}

