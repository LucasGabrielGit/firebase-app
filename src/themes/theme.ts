import { Palette } from "@mui/icons-material";
import { blue, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      "100": orange[100],
      "500": red[400],
    },
    secondary: {
      main: blue[500],
    },
  },
});
