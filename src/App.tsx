import { useState } from "react";
import "./App.css";
import { TeamsButtons } from "./TeamsButtons";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { EmployeesDisplay } from "./EmployeesDisplay";
import { Header } from "./Header";

//theme colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#02D076", //green
    },
    secondary: {
      main: "#10BFFC",
    },
  },
});

function App() {
  const [teamSelected, setTeam] = useState<string>("");

  const handleTeamSelection = (value:string) => {
    setTeam(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      {teamSelected ? <EmployeesDisplay teamSelected={teamSelected} setTeam={handleTeamSelection}/> : <TeamsButtons setTeam={handleTeamSelection}/>}
      
    </ThemeProvider>
  );
}

export default App;
