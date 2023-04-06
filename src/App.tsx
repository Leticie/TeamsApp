import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TeamsButtons } from "./TeamsButtons";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

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
  const [teams, setTeams] = useState();
  const [employees, setEmployees] = useState();

  const api_key = import.meta.env.VITE_API_KEY;
  
  const config = {
    headers: {
      apikey: api_key,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*`,
        config
      )
      .then((response) => {
        setTeams(response.data);
      });
  }, []);

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
