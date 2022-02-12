import react from "react";
import AppRouter from "./components/AppRouter";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./toolkitRedux/rootReducer";
import Logo from "./components/Logo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Logo />
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
