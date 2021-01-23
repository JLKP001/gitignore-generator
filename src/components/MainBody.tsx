import React, { useState } from "react";

import { TemplateSelector } from "./TemplateSelector";
import { OutputDialog } from "./OutputDialog";
import { MessageBar } from "./MessageBar";

export const MainBody = () => {
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
      <TemplateSelector
        output={output}
        setOutput={setOutput}
        openDialog={handleOpenDialog}
      />
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
