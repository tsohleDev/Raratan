/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#2C2B30',
        secondary: '#F2C4CE',
        tertiary: '#F58F7C',
        dark: '#4F4F51',
        light: '#D6D6D6',
      },
      fontFamily: {
        'fuzzy-bubbles': ['"Fuzzy Bubbles"', 'sans-serif'],
        'latobold': ['"Lato Bold"', 'sans-serif']
      },
      rotate: {
        10: '10deg',
        20: '20deg',
      },
      backgroundImage: {
        'chess': 'url("/chess two.jpg")',
      },
      width: {
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
        'xsm': '375px',
      },
      screens: {
        'xs': {'max': '376px'},
      },
      animation: {
        'bounce-once': 'bounce 1s',
        'bounce-slower': 'bounce 6.2s infinite',
        'bounce-slowest': 'bounce 6.4s infinite',
        'bounce-hold': 'bounce 1s infinite steps(5)',
        'step-end': 'animation-timing-function: steps(1)',
      },
    },
  },
  plugins: [],
}
