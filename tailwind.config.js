/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f6f1f1',
        'primary-dark': '#171717',
        secondary: '#a89a9a'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
