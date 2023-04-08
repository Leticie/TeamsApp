import { useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveDrawer from "./AppContent";

//theme colors
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#02D076", //green
    },
    secondary: {
      main: "#10BFFC",
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer />
      </ThemeProvider>
  );
}

export default App;
