/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        gradient: {
          blue: '#0066FF',
          pink: '#FF00E5'
        }
      },
    },
  },

  plugins: [require("daisyui")],
  darkMode: ['class'],
  daisyui: {
    themes: ['dark', 'light'],
  },
}

