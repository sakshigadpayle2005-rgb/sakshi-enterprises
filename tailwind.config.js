/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#1A1A1A',
          white: '#FFFFFF',
          orange: '#FF6B35',
          lightGrey: '#F5F5F5',
          darkGrey: '#333333',
        }
      },
      fontFamily: {
        heading: ['Manrope', 'Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        architectural: '0.18em',
      }
    },
  },
  plugins: [],
}
