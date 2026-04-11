/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
      colors: {
        sand: {
          50: '#fdf9f4',
          100: '#f5efe6',
          200: '#ecddd0',
          300: '#dfc9b5',
        },
      },
    },
  },
  plugins: [],
}
