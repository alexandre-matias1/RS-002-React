import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global";
import { CyclesContentProvider } from "./contexts/CycleContents";


export function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContentProvider>
        <Router/>
      </CyclesContentProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    </>
  )
}

