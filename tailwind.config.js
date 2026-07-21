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
        brand: {
          50:  '#e8f5ee',
          100: '#c8e6d4',
          200: '#a3d4ba',
          300: '#7ec4a4',
          400: '#5cb58e',
          500: '#3dab8e',
          600: '#2e9478',
          700: '#1f7a60',
          800: '#145f4a',
          900: '#0a4434',
        },
      },
    },
  },
  plugins: [],
}
