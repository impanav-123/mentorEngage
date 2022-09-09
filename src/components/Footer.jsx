import React from "react";
import { Grid, Stack, Typography, Link, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "../images/logo.png";

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Grid>
      <Grid
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "250px",
          p: "20px",
        }}
      >
        <Stack direction="row" spacing={6}>
          <Stack spacing={2}>
            <Typography variant="text6M" color="fonts.white">
              {t("F_product")}
            </Typography>
            <Link variant="link1" color="fonts.white" underline="hover">
              How it works?
            </Link>
            <Link variant="link1" color="fonts.white" underline="hover">
              Our Mentors
            </Link>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="text6M" color="fonts.white">
              {t("F_community")}
              Community
            </Typography>
            <Link variant="link1" color="fonts.white" underline="hover">
              Become a Mentor
            </Link>
            <Link variant="link1" color="fonts.white" underline="hover">
              Customer love
            </Link>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="text6M" color="fonts.white">
              {t("F_About")}
            </Typography>
            <Link variant="link1" color="fonts.white" underline="hover">
              Our Value
            </Link>
            <Link variant="link1" color="fonts.white" underline="hover">
              Blog
            </Link>
            <Link variant="link1" color="fonts.white" underline="hover">
              Contact Us
            </Link>
            <Link variant="link1" color="fonts.white" underline="hover">
              Help Center
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        sx={{
          backgroundColor: "white",
          height: "250px",
          p: "20px",
        }}
      >
        <Toolbar>
          <Stack
            sx={{ width: "100vw" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={logo} className="img" alt="logo" />
            <Stack direction="row" alignItems="center" spacing={6}>
              <Link
                variant="link1"
                color="fonts.black"
                underline="hover"
              ></Link>
              <Link
                variant="link1"
                className="CookiePolicy"
                color="fonts.black"
                underline="hover"
              >
                Cookie Policy
              </Link>
              <Link
                variant="link1"
                className="TermsofUse"
                color="fonts.black"
                underline="hover"
              >
                Terms of Use
              </Link>
              <Link
                variant="link1"
                className="PrivacyPolicy"
                color="fonts.black"
                underline="hover"
              >
                Privacy Policy
              </Link>
            </Stack>
          </Stack>
        </Toolbar>
      </Grid>
    </Grid>
  );
};

export default Footer;
