import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TeamsButtons } from "./TeamsButtons";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

//theme colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#02D076'
    },
    secondary: {
      main: '#10BFFC'
    }
  }
})

function App() {
  const [employees, setEmployees] = useState();
  
  const config = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/employees?select=*`,
        config
      )
      .then((response) => {
        setEmployees(response.data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" component="h1">
        Teams
      </Typography>
      <TeamsButtons />
    </ThemeProvider>
  );
}

export default App;
