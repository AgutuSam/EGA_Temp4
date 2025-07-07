export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        noir: {
          50: '#F5F7FA',
          100: '#E9EEF5',
          200: '#D3DCE6',
          300: '#B8C5D1',
          400: '#9BA8B4',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0B0C0F'
        },
        neon: {
          cyan: '#00FFFF',
          blue: '#0FF',
          gold: '#FFD700',
          green: '#00FF00',
          purple: '#8B5CF6',
          pink: '#FF00FF'
        },
        electric: {
          50: '#F0FDFF',
          100: '#CCFBFF',
          200: '#99F6FF',
          300: '#5CEDFF',
          400: '#06D6F9',
          500: '#00B8D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63'
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
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
        'noir-gradient': 'linear-gradient(135deg, #0B0C0F 0%, #1E2127 50%, #121417 100%)',
        'neon-gradient': 'linear-gradient(135deg, #00FFFF 0%, #0FF  50%, #FFD700 100%)',
        'holographic': 'linear-gradient(45deg, #00FFFF 0%, #8B5CF6 25%, #FF00FF 50%, #00FF00 75%, #FFD700 100%)'
      }
    }
  },
  plugins: []
}
