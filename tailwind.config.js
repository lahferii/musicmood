/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      animation: {
        cardIn: 'cardIn 500ms ease-in-out',
        cardOut: 'cardOut 500ms ease-in-out',
        fadeIn: 'fadeIn 500ms ease-in-out',
      },
      keyframes:{
        cardIn: {
          '0%': {
            transform: 'scale(0%)',
          },
          '50%': { 
            transform: 'scale(110%)',
          },
          '100%': {
            transform: 'scale(100%)',
          }
        },
        cardOut: {
          '0%': {
            transform: 'scale(100%)',
          },
          '100%': {
            transform: 'scale(0%)',
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          }
        }
      }
    },
  },
  plugins: [],
}
