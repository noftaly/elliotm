const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      scale: {
        '101': '1.01',
      },
      height: {
        'two-third-screen': '66vh',
      },
      margin: {
        'two-third-screen': '66vh',
      },
    },
    fontFamily: {
      headline: ['Baloo Bhai'],
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
