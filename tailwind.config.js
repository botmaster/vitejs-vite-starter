/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

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

      'gray': {
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },


      'body': {
        background: 'var(--color-body-background)',
        text: 'var(--color-body-text)',
      },
    },
    fontFamily: {
      ...defaultTheme,
      display: [
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      body: [
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
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
