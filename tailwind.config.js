/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // 'primary': ['Inter', 'sans-serif'],
      'primary': ['Fira Mono', 'monospace']
    },
    extend: {
      colors: {
        'primary' : '#DD8905',
        'secondary' : '#B85F01',
        'info' : '#63BAAB',
        'success' : '#22C36F',
        'dark' : '#534439'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
