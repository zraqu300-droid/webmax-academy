/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e7e9ef',
          100: '#c3c9d9',
          200: '#9ba7bf',
          300: '#7385a5',
          400: '#546a91',
          500: '#354f7c',
          600: '#2f4474',
          700: '#273a69',
          800: '#1f305f',
          900: '#0d1a2f',
          950: '#091223',
        },
        gold: {
          50: '#fefce8',
          100: '#fff9c4',
          200: '#fff59d',
          300: '#fff176',
          400: '#ffee58',
          500: '#fdd835',
          600: '#fbc02d',
          700: '#f9a825',
          800: '#f57f17',
          900: '#e65100',
          950: '#c43e00',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
