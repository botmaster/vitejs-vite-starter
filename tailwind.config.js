/** @type {import('tailwindcss').Config} */

const colorDefault = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colorDefault.blue,
        accent: colorDefault.pink,
        neutral: colorDefault.neutral,
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '3rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
