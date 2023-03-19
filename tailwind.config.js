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
        'gameWin': '#222a5c',
        'gameWin-hover': '#1c2249'
      },
      fontFamily: {
        SansPro: ['Source_Sans_Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}