/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#021024',
        surface: '#052659',
        primary: '#5483B3',
        hover: '#7DA0CA',
        accent: '#C1E8FF',
        white: '#F8FAFC',
        secondary: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
}
