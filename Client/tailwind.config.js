/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'madimi': ['Madimi One', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}