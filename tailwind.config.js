/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'primary':{
        10: '#f38e82'
      },
      'grad':{
        10:'#fbdb89',
        20:'#f48982'
      },
      'greyLight':{
        10:'#f9f5f3',
        20:'#f2efee',
        30:'#d3c7c3'
      },
      'greyDark':{
        10:'#615551',
        20:'#918581'
      },
      'white':{
        10:'#FFFFFF'
      }
    },
    extend: {},
  },
  plugins: [],
}

