import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "rgb(224,225,227)",
      light: "rgba(255, 255, 255, 0.8)",
      contrastText: "rgb(190,200,190)",
      dark: "rgb(188,143,111)",
    },
    text: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
      },
    },
  },
});

export default theme;
