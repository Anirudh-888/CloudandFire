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
        obsidian: '#000000',
        noir: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#111111',
          800: '#171717',
          700: '#262626',
        },
        rednoir: {
          DEFAULT: '#ef233c',
          50: '#fff1f2',
          100: '#ffe4e6',
          400: '#f87171',
          500: '#ef233c',
          600: '#dc2626',
          700: '#b91c1c',
          900: '#7f1d1d',
          glow: 'rgba(239, 35, 60, 0.15)',
          deep: '#d90429'
        },
        brand: {
          blue: '#00a8ff',
          orange: '#ff5e13',
          red: '#ef233c',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'Space Grotesk', 'sans-serif']
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      },
      boxShadow: {
        'red-glow': '0 0 25px -5px rgba(239, 35, 60, 0.4)',
        'red-glow-lg': '0 0 50px -10px rgba(239, 35, 60, 0.45)',
        'red-bento': '0 0 0 1px rgba(239, 35, 60, 0.2), 0 8px 32px -4px rgba(0, 0, 0, 0.8)',
        'red-bento-hover': '0 0 0 2px rgba(239, 35, 60, 0.8), 0 12px 40px -4px rgba(239, 35, 60, 0.25)',
      }
    },
  },
  plugins: [],
}
