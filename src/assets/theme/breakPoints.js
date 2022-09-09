import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  },
});

export default theme;
