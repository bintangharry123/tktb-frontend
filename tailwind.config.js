/** @type {import('tailwindcss').Config} */
/** @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Ganti 'Roboto' dengan font yang diimpor
      }
    },
  },
  plugins: [],
}

