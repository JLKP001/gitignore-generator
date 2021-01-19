import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";

import { Header } from "./components/Header";
import { MainBody } from "./components/MainBody";

const useStyles = makeStyles((theme) => ({
  root: { height: "100vh" },
  bodyOuter: {
    display: "table",
    position: "absolute",
    top: "64",
    left: "0",
    height: "90%",
    width: "100%",
  },
  bodyMiddle: {
    display: "table-cell",
    verticalAlign: "middle",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Header />
        <div className={classes.bodyOuter}>
          <div className={classes.bodyMiddle}>
            <MainBody />
          </div>
        </div>
      </div>
      <CssBaseline />
    </>
  );
};

export default App;
