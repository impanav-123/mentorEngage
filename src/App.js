import React from "react";
import Router from "./routes/routes";
import { StyledEngineProvider } from "@mui/material/styles";
import theme from "./assets/theme/theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Router userId={user?.creator?._id} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default App;
