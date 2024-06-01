/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-jp': ["Noto Sans JP", 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: ['dark']
  },
  plugins: [require('daisyui')],
}

