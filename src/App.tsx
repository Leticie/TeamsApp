import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppContent } from "./components/AppContent";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;