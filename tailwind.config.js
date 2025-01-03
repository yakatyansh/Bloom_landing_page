/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bloom: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'bloom-reverse': {
          '0%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'bloom-flower': {
          '0%': { transform: 'scale(0.8)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'bloom-hover': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(1.1)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        'bloom': 'bloom 2s ease-in-out infinite',
        'bloom-reverse': 'bloom-reverse 0.3s ease-out forwards',
        'bloom-flower': 'bloom-flower 3s ease-out forwards',
        'bloom-hover': 'bloom-hover 0.6s ease-in-out'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        purple: {
          950: '#1a0a2e',
        }
      }
    },
  },
  plugins: [],
} 