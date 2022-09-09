import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CircularProgress, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getLookupValue } from "../../store/reducers/actions/authActions";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getLookupValue(setLoading));
  }, []);
  return (
    <Grid>
      {" "}
      {t("sshome")}
      {loading && <CircularProgress />}
    </Grid>
  );
};

export default Home;
