/** @type {import('tailwindcss').Config} */

// const colorDefault = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'current': 'currentColor',
      'transparent': 'transparent',
      'white': 'var(--color-white)',
      'black': 'var(--color-black)',
      'primary': 'rgb(var(--color-primary) / <alpha-value>)',
      'primary-content': 'rgb(var(--color-primary-content) / <alpha-value>)',
      'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
      'secondary-content': 'rgb(var(--color-secondary-content) / <alpha-value>)',
      'accent': 'rgb(var(--color-accent) / <alpha-value>)',
      'accent-content': 'rgb(var(--color-accent-content) / <alpha-value>)',
      'neutral': 'rgb(var(--color-neutral) / <alpha-value>)',
      'neutral-content': 'rgb(var(--color-neutral-content) / <alpha-value>)',

      'body': {
        background: 'var(--color-body-background) / <alpha-value>',
        text: 'var(--color-body-text) / <alpha-value>',
      },
    },
    extend: {

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
