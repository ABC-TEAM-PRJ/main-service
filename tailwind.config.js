const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        // => @media (min-width: 640px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        'main-color':'#32A852',
        'light-black':'#555555',
        'light-grey':'#888888',
      }
    }
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("flowbite/plugin")
  ],
}
