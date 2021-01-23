import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

interface MessageBarProps {
  openSnackbar: boolean;
  handleCloseSnackbar: () => void;
  snackbarMsg: string;
}

export const MessageBar = ({
  openSnackbar,
  handleCloseSnackbar,
  snackbarMsg,
}: MessageBarProps) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleCloseSnackbar}
        severity="success"
      >
        {snackbarMsg}
      </Alert>
    </Snackbar>
  );
};
