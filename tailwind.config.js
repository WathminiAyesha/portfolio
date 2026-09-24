/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f7ced6',
          300: '#f0a8b7',
          400: '#e3778f',
          500: '#cf4869',
          600: '#b62e51',
          700: '#99213f',
          800: '#800020', // Burgundy
          900: '#5c0d1b', // Deep Maroon
          950: '#38050e', // Ultra Deep Maroon
        },
        wine: {
          DEFAULT: '#722f37',
          light: '#8e3f48',
          dark: '#581825',
        },
        plum: {
          DEFAULT: '#3b1224',
          dark: '#260a17',
          deep: '#18050e',
        },
        rose: {
          dusty: '#d48b9b',
          soft: '#e8b4c0',
          blush: '#f5d5dc',
          pale: '#faedf0',
        },
        charcoal: {
          950: '#070406',
          900: '#0e080b',
          850: '#140c10',
          800: '#1a1016',
          750: '#22151e',
          700: '#2c1c27',
          600: '#422c3b',
        },
        warm: {
          50: '#fdfcf9',
          100: '#f9f6f0',
          200: '#f2ede2',
          300: '#e6decb',
          400: '#d5c7ab',
          500: '#b8a37e',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'maroon-sm': '0 2px 8px -2px rgba(128, 0, 32, 0.25)',
        'maroon': '0 8px 30px -4px rgba(128, 0, 32, 0.35)',
        'maroon-lg': '0 20px 40px -10px rgba(128, 0, 32, 0.45)',
        'maroon-glow': '0 0 50px -10px rgba(182, 46, 81, 0.3)',
        'glow-sm': '0 0 15px rgba(212, 139, 155, 0.25)',
        'glow-lg': '0 0 35px rgba(182, 46, 81, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(28px)' },
        }
      }
    },
  },
  plugins: [],
}
