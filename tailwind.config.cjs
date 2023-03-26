/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#262626',
        mainBtn: '#404040',
        mainText: '#bfbfbf',
        mainDesc: '#ababab',
        gray: '#333333',
      },
    },
  },
  plugins: [],
};
