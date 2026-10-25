/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        display: ['Syne', 'Inter', 'sans-serif'],
        tech: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Cyber neon theme palette
        neon: {
          DEFAULT: '#ccff00',
          hover: '#b5e600',
          dim: '#8cb300',
          bright: '#e0ff4f',
          glow: 'rgba(204, 255, 0, 0.35)',
        },
        void: {
          DEFAULT: '#07080a',
          darker: '#030405',
          card: '#0c0e14',
          surface: '#11141c',
          border: '#1a1f2c',
          muted: '#272d3d',
        },
        // Brand palette mapped to neon lime and cyber tones
        brand: {
          50:  '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#ccff00',
          400: '#ccff00',
          500: '#ccff00',
          600: '#b0db00',
          700: '#8fad00',
          800: '#6c8200',
          900: '#4c5c00',
          950: '#283200',
        },
        // Secondary tech cyan/green
        secondary: {
          DEFAULT: '#00f0ff',
          light: '#70f7ff',
          dim: '#00a3ad',
        },
        // Surface tokens for cyber theme
        surface: {
          DEFAULT: '#0c0e14',
          low: '#07080a',
          container: '#11141c',
          high: '#181c27',
          highest: '#1f2433',
          dim: '#040507',
          bright: '#141824',
          variant: '#1a1f2c',
        },
        'on-surface': '#f1f5f9',
        'on-surface-variant': '#94a3b8',
        outline: '#1e293b',
        'outline-variant': '#334155',
      },
      animation: {
        'laser-glow': 'laserPulse 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'blink': 'blink 1s step-start infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        laserPulse: {
          '0%, 100%': { opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(204,255,0,0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(204,255,0,0.8))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px -2px rgba(204, 255, 0, 0.35)',
        'neon-strong': '0 0 35px 2px rgba(204, 255, 0, 0.55)',
        'neon-sm': '0 0 10px rgba(204, 255, 0, 0.25)',
        'hud': 'inset 0 0 15px rgba(204, 255, 0, 0.05), 0 0 25px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}
