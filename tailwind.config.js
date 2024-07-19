/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    
    colors: {
      'h-Gray' : '#333333',
      'h-orange' : '#B24000',
      'h-f-gray' : '#808080',
      'h-white' : '#FFFFFF',
      'h-ff' : '#F2F2F2',
      'h-f2' : '#999999',
      'h-green' : '#20B526',
      'h-black' : '#1A1A1A',
      'h-v-fgray' : '#F7F7F7',
      'transparent' :'transparent',
      'icon-gray' :'#4D4D4D',
      'gray-pink' :'#FDF8F5',
      'white-faint' :'#FFFAFA',


      
      
    },
    extend: {
      fontFamily: {
        'pop' : 'Popins, sans-serif',
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    darkTheme: "light",
   },
  

  
}

// npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch

