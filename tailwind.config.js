/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-color':'#32A852',
      'light-black':'#555555',
      'light-grey':'#888888'
    },
    extend: {},
  },
  plugins: [],
}
