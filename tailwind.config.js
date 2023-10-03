/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'current': 'currentColor',
      'transparent': 'transparent',
      'white': 'var(--color-white-hex)',
      'black': 'var(--color-black-hex)',
      'primary': 'hsl(var(--color-primary) / <alpha-value>)',
      'primary-content': 'hsl(var(--color-primary-content) / <alpha-value>)',
      'secondary': 'hsl(var(--color-secondary) / <alpha-value>)',
      'secondary-content': 'hsl(var(--color-secondary-content) / <alpha-value>)',
      'accent': 'hsl(var(--color-accent) / <alpha-value>)',
      'accent-content': 'hsl(var(--color-accent-content) / <alpha-value>)',
      'neutral': 'hsl(var(--color-neutral) / <alpha-value>)',
      'neutral-content': 'hsl(var(--color-neutral-content) / <alpha-value>)',
      'warning': 'hsl(var(--color-warning) / <alpha-value>)',
      'warning-content': 'hsl(var(--color-warning-content) / <alpha-value>)',
      'success': 'hsl(var(--color-success) / <alpha-value>)',
      'success-content': 'hsl(var(--color-success-content) / <alpha-value>)',
      'danger': 'hsl(var(--color-danger) / <alpha-value>)',
      'danger-content': 'hsl(var(--color-danger-content) / <alpha-value>)',
      'info': 'hsl(var(--color-info) / <alpha-value>)',
      'info-content': 'hsl(var(--color-info-content) / <alpha-value>)',

      // Add gray fallbacks
      'gray': ((theme) => {
        const gray = { ...theme.gray };
        const  objectKeys = Object.keys(gray);
        objectKeys.forEach((key) => {
          gray[key] = `hsl(var(--color-gray-${key}, ${gray[key]}) / <alpha-value>)`;
        });
        return gray;
      })(defaultColors),

      'body': {
        background: 'var(--color-body-background-hex)',
        text: 'var(--color-body-text-hex)',
      },
      'muted': {
        text: 'var(--color-muted-text-hex)',
      },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
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
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')({
    strategy: 'class',
  })],
};
