/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-100': '#affc41',
        'gray-100': '#e1e5f2',
        'bg-green-150': '#93acb5',
      },
    },
  },
  plugins: [],
}
