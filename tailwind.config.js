/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'xs': '480px',
        // '3xl': '1600px',

        xs: { min: '10px', max: '375px' },
        sm: { min: '376px', max: '768px' },
      },
    },
  },
  plugins: [],
}