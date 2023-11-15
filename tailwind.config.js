/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist./src/*.{html,js}",
  "./index.html","./flutter.html","./blog/*/**"
],
  theme: {
    extend: {},
    screens:{
      'xs':"300px",
      'sm': '640px',
      'md':"768px",
      'lg':"1024px",
      'xl':"1280px",
    }
  },
  plugins: [],
}

