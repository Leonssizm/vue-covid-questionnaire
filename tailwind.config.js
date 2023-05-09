/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'anonymous':['Anonymous Pro', 'sans-serif'],
        'arial':['bpg_arial']
      },
    },
  },
  plugins: [],
}

