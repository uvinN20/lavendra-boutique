/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core brand palette lifted from the Lavendra Boutique Figma design
        navy: {
          50: '#eef1f9',
          100: '#dce3f3',
          400: '#3d4f8a',
          500: '#1f2d5c',
          600: '#182248',
          700: '#141b39',
          900: '#0c1226',
        },
        lavender: {
          300: '#b7bdf0',
          400: '#9aa3e8',
          500: '#7c86dd',
        },
        surface: {
          light: '#f7f7fb',
          DEFAULT: '#ffffff',
          dark: '#0f1424',
          card: '#161d33',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        card: '0 2px 10px rgba(15, 20, 36, 0.06)',
        cardDark: '0 2px 14px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
