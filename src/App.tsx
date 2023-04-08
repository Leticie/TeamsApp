import { useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { EmployeesDisplay } from "./EmployeesDisplay";
import ResponsiveDrawer from "./ResposiveDrawer";

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
  const [teamSelected, setTeam] = useState<string>("");

  const handleTeamSelection = (value: string) => {
    setTeam(value);
  };

  return (
    <>
      <ResponsiveDrawer />
    </>
  )
}


export default App;
