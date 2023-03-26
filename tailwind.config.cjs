/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text1: 'text1 3s linear 0s infinite',
      },
      keyframes: {
        text1: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'color': '#fff',
          },
        },
      },
      colors: {
        'title-1': {
          'start-color': {
            100: '#BF0003',
          },
          'middle-color': {
            100: '#9F1400',
          },
          'end-color': {
            100: '#802E00',
          },
        },
        
      }
    },
  },
  plugins: [],
}
