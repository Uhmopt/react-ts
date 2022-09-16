import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import "./App.css";
import Root from "./routes";
import store from "./store";
import { muiTheme } from "./theme/muiThemes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <Root />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
