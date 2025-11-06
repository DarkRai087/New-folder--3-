/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'metropolis': ['Metropolis', 'sans-serif'],
      },
      letterSpacing: {
        'tight-custom': '-0.27px',
      },
    },
  },
  plugins: [],
}
