/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'primary': ['Fira Mono', 'monospace'],
      'secondary': ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        'primary' : '#DD8905',
        'secondary' : '#B85F01',
        'info' : '#00BFE8',
        'success' : '#22C36F',
        'danger' : '#ff5959',
        'dark' : '#40514e'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
