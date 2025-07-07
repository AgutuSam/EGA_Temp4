export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        heritage: {
          50: '#F8FAF6',
          100: '#F0F3EA',
          200: '#DDE5D0',
          300: '#C5D1B3',
          400: '#A8B892',
          500: '#8B9F71',
          600: '#708258',
          700: '#566647',
          800: '#445039',
          900: '#384530',
          950: '#1C2118'
        },
        forest: {
          50: '#F0FDF0',
          100: '#DCFCDC',
          200: '#BBF7BB',
          300: '#86EF86',
          400: '#4ADE4A',
          500: '#22C522',
          600: '#16A516',
          700: '#158215',
          800: '#166616',
          900: '#145414',
          950: '#052E05'
        },
        royal: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554'
        },
        classic: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03'
        }
      },
      fontFamily: {
        'trajan': ['Trajan Pro', 'serif'],
        'minion': ['Minion Pro', 'serif'],
        'garamond': ['EB Garamond', 'serif'],
        'optima': ['Optima', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
        'holographic': 'holographic 4s ease-in-out infinite',
        'reveal': 'reveal 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #00FFFF' },
          '100%': { boxShadow: '0 0 30px #00FFFF, 0 0 40px #00FFFF' }
        },
        neonPulse: {
          '0%': { 
            textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF',
            filter: 'brightness(1.2)'
          }
        },
        holographic: {
          '0%, 100%': { transform: 'perspective(400px) rotateY(-15deg) rotateX(2deg)' },
          '50%': { transform: 'perspective(400px) rotateY(15deg) rotateX(-2deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      boxShadow: {
        'neon': '0 0 20px #00FFFF',
        'neon-lg': '0 0 30px #00FFFF, 0 0 40px #00FFFF',
        'neon-xl': '0 0 40px #00FFFF, 0 0 60px #00FFFF, 0 0 80px #00FFFF',
        'electric': '0 0 20px #0FF',
        'gold': '0 0 20px #FFD700',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 16px 60px rgba(31, 38, 135, 0.37)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'heritage-gradient': 'linear-gradient(135deg, #F8FAF6 0%, #DDE5D0 50%, #C5D1B3 100%)',
        'classic-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
        'royal-gradient': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)'
      }
    }
  },
  plugins: []
}
