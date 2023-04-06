import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TeamsButtons } from "./TeamsButtons";
import { Typography } from "@mui/material";

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
    <div className="App">
      <Typography variant="h1" component="h2">
        Teams
      </Typography>
      <TeamsButtons />
    </div>
  );
}

export default App;
