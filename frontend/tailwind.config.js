/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'red-primary': '#FF2D55',
        'red-primary-light': '#f85775',
        'gray-custom': '#928EAA'
      }
    },
  },
  plugins: [],
}

