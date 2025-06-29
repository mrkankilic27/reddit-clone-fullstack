/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        reddit: "#e5450b",
        reddit_light: "#d93a00",
        reddit_dark: "#962900",
        light_gray: "#d2dadd",
      }
    },
  },
  plugins: [],
}

