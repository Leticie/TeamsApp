import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TeamsButtons } from "./TeamsButtons";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { EmployeesDisplay } from "./EmployeesDisplay";

//theme colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#02D076' //green
    },
    secondary: {
      main: '#10BFFC'
    }
  }
})

function App() {


  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" component="h1">
        Teams
      </Typography>
      <TeamsButtons />
      <EmployeesDisplay />
    </ThemeProvider>
  );
}

export default App;
