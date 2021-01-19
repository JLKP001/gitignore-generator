import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";

import { TemplateForm } from "./TemplateForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    textAlign: "center",
    height: "80%",
  },
  title: {
    textTransform: "capitalize",
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  subTitle: {
    textTransform: "capitalize",
    color: theme.palette.grey[500],
  },
}));

export const MainBody = () => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        select templates
      </Typography>
      <Typography variant="subtitle1" className={classes.subTitle}>
        choose files to ignore from a list of templates
      </Typography>
      <TemplateForm />
    </Paper>
  );
};
