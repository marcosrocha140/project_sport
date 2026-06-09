export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        road: ['"Road Rage"', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}