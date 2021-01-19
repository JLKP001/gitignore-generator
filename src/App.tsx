import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";

import { Header } from "./components/Header";
import { MainBody } from "./components/MainBody";

const useStyles = makeStyles((theme) => ({
  root: { paddingBottom: theme.spacing(5) },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Header />
        <MainBody />
      </div>
      <CssBaseline />
    </>
  );
};

export default App;
