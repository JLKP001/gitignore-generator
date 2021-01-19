import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const useStyles = makeStyles((theme) => ({
  icon: { marginRight: theme.spacing(2) },
  title: { textTransform: "capitalize" },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <LibraryBooksIcon className={classes.icon} />
        <Typography variant="h6" className={classes.title}>
          gitignore generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
