/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg': "url('/src/assets/Frame 163636.png')", 
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif' ],
      },
    },
  },
  plugins: [],
}

