import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Stack, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../images/logo.png";
import Typography from "@mui/material/Typography";
import CloseOutline from "@mui/icons-material/CloseOutlined";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="Reactangle-1"
        sx={{ backgroundColor: "white", height: "80px", paddingTop: "10px" }}
      >
        <Toolbar>
          <Stack
            sx={{ width: "100vw" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={logo} className="img" alt="logo" />
            <Stack direction="row" alignItems="center" spacing={2}>
              <Link
                variant="link1"
                color="fonts.black"
                underline="hover"
              ></Link>
              <Link
                variant="link1"
                className="Howitworks"
                color="fonts.black"
                underline="hover"
              >
                How it works
              </Link>
              <Link
                variant="link1"
                className="Mentors"
                color="fonts.black"
                underline="hover"
              >
                Mentors
              </Link>
              <Button className="Rectangle-5">Become a mentor</Button>
              <Button className="Rectangle-4 ">Sign in</Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
