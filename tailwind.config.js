/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        header:['Dancing Script'],
        body:['Jost'],
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

