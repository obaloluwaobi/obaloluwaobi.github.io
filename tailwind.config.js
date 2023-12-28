/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist./src/*.{html,js}",
  "./index.html","./flutter.html","./blog/*/**"
],
  theme: {
    extend: { colors:{
      bgcolor:"hsl(240,40%,6%)",
      name:"hsl(35,94%,59%)"
    }},
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

