import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppContent from "./components/AppContent";

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
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
