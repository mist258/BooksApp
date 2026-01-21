import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { brown } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brown[500],
    },
    //background: {
    //default: "#121212",
    //paper: "#1e1e1e",
    //},
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <App />
  </ThemeProvider>,
);
