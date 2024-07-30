/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "src/AppContiner.{tsx,jsx,js,ts}"
    , "src/App.{tsx,jsx,js,ts}"
    ,"src/components/Sidebar.tsx"
    ,"src/components/Step.tsx"
    ,"src/components/ListIcon.tsx",
    "src/components/SidebarItem.tsx",
  "src/components/PersonalInfoForm.tsx",
  "src/components/SelectPlan.tsx",
  "src/components/AddOnes.tsx",
  "src/components/Summery.tsx",
  "src/components/PlanList.tsx",
  "src/components/PlanCard.tsx",
  "src/components/NavigateButtonGroup.tsx"
  ,"src/components/AddOption.tsx","src/components/AddOptionList.tsx"

],
  theme: {
    extend: {
      backgroundImage:{
        'sideBar-desktop':"url('/assets/images/bg-sidebar-desktop.svg')"
        ,'sideBar-mobile':"url('/assets/images/bg-sidebar-mobile.svg')"

      }
    },
    colors:{
      'Marine-blue':"hsl(213, 96%, 18%)"
      ,'Purplish-blue':'hsl(243, 100%, 62%)'
      ,'Pastel-blue':'hsl(228, 100%, 84%)'
      ,'Light-blue':'hsl(206, 94%, 87%)',
      'Strawberry-red':'hsl(354, 84%, 57%)',
      'Cool-gray':'hsl(231, 11%, 63%)',
      'light-gray':'hsl(229, 24%, 87%)',
      'mid-gray':'hsl(229, 24%, 93%)',
      'Alabaster':'hsl(231, 100%, 99%)'
      ,'white':'white'
    },
    fontFamily:{
      'Ubuntu':['Ubuntu','sans-serif']
    }
  },
  plugins: [],
};
