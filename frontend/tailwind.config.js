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
      },
      invert: {
        35: '.35'
      },
      sepia: {
        67: '.67'
      },
      saturate: {
        5606: '.5606'
      },
    },
  },
  plugins: [],
}

