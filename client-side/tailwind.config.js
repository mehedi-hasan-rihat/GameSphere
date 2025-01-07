/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'code': "url('https://i.ibb.co.com/txk9Zrx/mesh-757.png')",
        'dark' :"url('https://i.ibb.co.com/rm8mbHv/mesh-759.png')",
        'darkGenres' :"url('https://i.ibb.co.com/LNHBV5s/cool-background.png')",
        'lightGenres' :"url('https://i.ibb.co.com/F8jc94t/cool-background.png')",
       })
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
}