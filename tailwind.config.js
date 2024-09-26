/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scrollbar-thumb': '#8f42be', // Customize the thumb color
        'scrollbar-track': 'transparent', // Customize the track color
      },
    },
  },
  plugins: [],
}
