/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Compassionate healthcare palette - deep garnet, rose clay, warm ivory
        primary: {
          50: '#fdf3f4',
          100: '#fce8ea',
          200: '#f6cfd4',
          300: '#eaaab2',
          400: '#d77b86',
          500: '#c24f5d',
          600: '#7A1E2C',
          700: '#5A1320',
          800: '#471018',
          900: '#2f0a12',
        },
        secondary: {
          50: '#fdf4f5',
          100: '#fbeaec',
          200: '#f5d3d7',
          300: '#e9b0b6',
          400: '#d88b92',
          500: '#C96A72',
          600: '#B85A63',
          700: '#9E4A53',
          800: '#7C3A41',
          900: '#5B2A30',
        },
        accent: {
          50: '#fff7f6',
          100: '#feeceb',
          200: '#fbd6d2',
          300: '#f3b8b1',
          400: '#E8A7A1',
          500: '#dd8f89',
          600: '#c97571',
          700: '#a65e5a',
          800: '#854948',
          900: '#5f3334',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        warm: {
          50: '#f2f7f5',
          100: '#e1ebe7',
          200: '#c3d7d1',
          300: '#a3c1b9',
          400: '#8aacA3',
          500: '#7C9A92',
          600: '#6b8680',
          700: '#5a726d',
          800: '#475956',
          900: '#34403f',
        },
        ivory: {
          50: '#FAF7F4',
          100: '#F3ECE7',
        },
        charcoal: {
          900: '#1F1A17',
          700: '#3F3732',
        },
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7A1E2C 0%, #5A1320 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #C96A72 0%, #B85A63 100%)',
        'gradient-accent': 'linear-gradient(135deg, #E8A7A1 0%, #c97571 100%)',
        'gradient-warm': 'linear-gradient(135deg, #7A1E2C 0%, #C96A72 55%, #E8A7A1 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(122, 30, 44, 0.92) 0%, rgba(201, 106, 114, 0.8) 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FAF7F4 0%, #F3ECE7 100%)',
        'gradient-hope': 'linear-gradient(135deg, rgba(201, 106, 114, 0.18) 0%, rgba(122, 30, 44, 0.08) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2F2A27',
            a: {
              color: '#7A1E2C',
              '&:hover': {
                color: '#5A1320',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
