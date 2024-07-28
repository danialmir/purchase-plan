/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "src/App.{tsx,jsx,js,ts}"],
  theme: {
    extend: {
      backgroundImage:{
        'sideBar-desktop':"url('public/assets/images/bg-sidebar-desktop.svg')"
        ,'sideBar-mobile':"url('public/assets/images/bg-sidebar-mobile.svg')"

      }
    },
    colors:{
      'Marine-blue':"hsl(213, 96%, 18%)"
      ,'Purplish-blue':'hsl(243, 100%, 62%)'
      ,'Pastel-blue':'hsl(228, 100%, 84%)'
      ,'Light-blue':'hsl(206, 94%, 87%)',
      'Strawberry-red':'hsl(354, 84%, 57%)',
      'Cool-gray':'hsl(231, 11%, 63%)',
      'light-gray':'hsl(229, 24%, 87%)'
      ,'Alabaster':'hsl(231, 100%, 99%)'
    },
    fontFamily:{
      'Ubuntu':['Ubuntu','sans-serif']
    }
  },
  plugins: [],
};
