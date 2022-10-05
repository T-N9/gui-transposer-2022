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
        'secondary' : '#455480',
        'info' : '#8B83FF',
        'success' : '#00C09C',
        'danger' : '#F25259',
        'dark' : '#2F4858',
        'light' : '#ffa726',
        'light-md' : '#f57c00'
      },
      // #8B83FF
      // #00C09C
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
