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
        'success' : '#00C09C',
        'danger' : '#F25259',
        'dark' : '#40514e',
        'light' : '#ffa726',
        'light-md' : '#f57c00'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
