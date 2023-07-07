/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'day': 'calc(100% / 7)',
        'gameCard': '40rem'
      },
      colors: {
        'boxBg': '#fafbfd',
        'pageBg': '#e9e7e6',
        'boxBorder': '#ececec',
        'headerBorder': '#e6e7e5',
        'blackHeading': 'rgb(17 24 39)',
        'grayHeading': '#a7a7a9',
      },
      fontFamily: {
        SansPro: ['Source_Sans_Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
