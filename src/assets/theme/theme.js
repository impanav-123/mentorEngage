import { createTheme } from "@mui/material";
import bp from "./breakPoints";

const primary = "#0b7a74";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: "#fff",
    },
    red: {
      main: "",
    },
    colors: {
      paper: "#F8F8F8",
      border: "#E8E8E8",
      border2: "#E1E1E1",
      white: "#ffffff",
      red: "#E3242B",
      blue: "#8BCFE4",
      card: "#F4F4F4",
      lightOrange: "#ffddcc",
      green: "#B5D261",
      green2: "#B2D157",
      lightOrange2: "#ffecd7",
      orangeLight: "#F5A278",
    },
    fonts: {
      white: "#ffffff",
      black: "#000000",
      blue: "#1E6DB7",
      greenDark: "#3D5200",
      orangeDark: "#EB7941",
      lightOrange: "#ffddcc",
      capFade: "#c4c4c4",
      capLight: "#747474",
      capLight2: "#b2b7bb",
      cap: "#4e5159",
      orangeLight: "#F5A278",
      cap2: "#505050",
      sub: "#252525",
      sub2: "2c2c2c",
      title: "#070914",
      red: "#E3242B",
      title2: "#0a0600",
    },
    lightButton: {
      main: "#FFDDCC",
      contrastText: "#FF5400",
    },
  },

  typography: {
    link1: {
      fontSize: "16px",
      fontWeight: 600,
    },
    text6M: {
      fontSize: "20px",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: 12,
          borderRadius: 6,
          fontWeight: 600,
          height: "38px",
          minWidth: "140px",
          "@media (max-width:1024px)": {
            minWidth: "110px",
            padding: "8px 10px",
          },
          "@media (max-width:450px)": {
            minWidth: "110px",
            height: "30px",
            padding: "6px 8px",
            fontSize: 10,
          },
        },

        sizeSmall: {
          fontSize: 14,
          fontWeight: 500,
          minWidth: "120px",
          padding: "5px 25px",
          [bp.breakpoints.between("md", "lg")]: {
            fontSize: 10,
          },
        },
      },
    },
  },
});

export default theme;
