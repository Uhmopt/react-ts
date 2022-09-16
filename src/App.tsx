import { ThemeProvider } from "@mui/material";
import "./App.css";
import Root from "./routes";
import { lightTheme } from "./theme/muiThemes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
