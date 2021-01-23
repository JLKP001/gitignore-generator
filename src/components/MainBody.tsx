import React, { useState } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";

import { TemplateForm } from "./TemplateForm";
import { OutputDialog } from "./OutputDialog";
import { MessageBar } from "./MessageBar";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(5),
    width: "60%",
    textAlign: "center",
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
  const [output, setOutput] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenSnackbar = (message: string) => {
    setOpenSnackbar(true);
    setSnackbarMsg(message);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Paper variant="outlined" className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          select templates
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          choose files to ignore from a list of templates
        </Typography>
        <TemplateForm
          output={output}
          setOutput={setOutput}
          openDialog={handleOpenDialog}
        />
      </Paper>
      <OutputDialog
        handleClose={handleCloseDialog}
        open={openDialog}
        output={output}
        handleOpenSnackbar={handleOpenSnackbar}
      />
      <MessageBar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        snackbarMsg={snackbarMsg}
      />
    </>
  );
};
