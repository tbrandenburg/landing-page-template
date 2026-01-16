/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(219, 234, 254)',
          100: 'rgb(191, 219, 254)',
          500: 'rgb(59, 130, 246)',
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
        },
        secondary: {
          500: 'rgb(147, 51, 234)',
          600: 'rgb(126, 34, 206)',
        },
        accent: {
          500: 'rgb(59, 130, 246)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-in': 'slide-in 0.8s ease-out',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
}