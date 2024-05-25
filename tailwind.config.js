/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,jsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter' , 'sans-serif'],
        serif: ['Jost' , 'sans-serif']
      },
      colors: {
        primary : '#850F8D' ,
        secondary : '#7CFC00' ,
        tertiary : '#ffffff'

      }
      },
  },
  plugins: [],
}

