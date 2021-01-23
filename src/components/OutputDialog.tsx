import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const useStyles = makeStyles((theme) => ({
  root: { display: "inline-block" },
  title: { textTransform: "capitalize" },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  textBox: { padding: theme.spacing(2) },
  actions: { justifyContent: "center" },
}));

interface OutputDialogProps {
  handleClose: () => void;
  open: boolean;
  output: string;
  handleOpenSnackbar: (message: string) => void;
}

export const OutputDialog = ({
  handleClose,
  open,
  output,
  handleOpenSnackbar,
}: OutputDialogProps) => {
  const classes = useStyles();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    handleOpenSnackbar("Copied to clipboard successfully!");
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth="sm">
      <DialogTitle className={classes.title}>
        gitignore file
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <SyntaxHighlighter language="ignore" style={materialDark}>
        {output}
      </SyntaxHighlighter>
      <DialogActions className={classes.actions}>
        <Button onClick={copyToClipboard} variant="contained" color="secondary">
          copy to clipboard
        </Button>
      </DialogActions>
    </Dialog>
  );
};
