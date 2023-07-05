const { fontFamily } = require('tailwindcss/defaultTheme');
const { backgroundColor } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  //darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      backgroundColor: {
        'regal-blue': '#243c5a'
      }
    }
  },
  plugins: []
};
