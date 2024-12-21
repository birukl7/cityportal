/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "phudu": ['Phudu', 'sans-serif'],
        "roboto": ['Roboto', 'sans-serif'],
      },
      colors:{
        "custom-green" : "#08A508",
        "custom-red-dark" : "#FF0000",
        "custom-red-light" : "#DC143C",
        "custom-blue" : "#6471FF",
      }
    },
  },
  plugins: [],
}

