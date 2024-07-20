/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./content/**/*.md",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      red: '#AF544E',
      blue: '#5457B5',
      beige: '#EED3C0',
      dark: '#46465B',
      gold: '#C5A706',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        title: ['Baumans', 'system-ui'],
      },
      maxHeight: {
        massive: '1200px'
      },
      width: {
        128: '32rem',
      }
    },
  },
  plugins: [],
}

