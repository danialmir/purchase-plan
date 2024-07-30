import { createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar"
import Step from "./components/Step"

declare module '@mui/material/styles' {
  interface Palette {
    MarineBlue: Palette['primary'];
    Gray: Palette['primary'];
  }

  interface PaletteOptions {
    MarineBlue?: PaletteOptions['primary'];
    Gray?: PaletteOptions['primary'];
  }
}


declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    MarineBlue: true;
    Gray:true;
  }
}

const theme = createTheme({
    palette:{
        MarineBlue:{
           main:"hsl(213, 96%, 18%)"
           ,light:'hsl(213,81%,50%)'
           ,dark:'hsl(213,98%,10%)'
           ,contrastText:'hsl(213,98%,101%)'
        },
        Gray:{
          main:'hsl(231, 11%, 63%)'
          ,light:'hsl(229, 24%, 87%)'
          ,dark:'hsl(231, 10%, 44%)'
          ,contrastText:'hsl(2,98%,111%)'
        }
    }
});


function App() {
    return (
        <ThemeProvider theme={theme}>
        <div className="lg:w-3/5 w-4/5 h-4/5 rounded-2xl bg-Alabaster flex overflow-hidden p-3 gap-3 text">
            <Sidebar />
            <Step />
        </div>
        </ThemeProvider>
    )
}

export default App
