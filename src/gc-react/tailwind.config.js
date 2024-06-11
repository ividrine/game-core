/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#18181b",
        secondary: "#3f3f46",
        neutral: "",
        accent: "",
        light: "#e4e4e7",
      },
    },
  },
  plugins: [],
};
