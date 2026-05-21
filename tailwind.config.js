import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        brand: {
          50: '#fdf8f5',
          100: '#f6e8dd',
          200: '#e7c5b1',
          300: '#d8a080',
          400: '#c67c55',
          500: '#aa5b35',
          600: '#8f4424',
          700: '#71351d',
          800: '#55301e',
          900: '#3d2620'
        }
      }
    },
  },
  plugins: [typography],
}
