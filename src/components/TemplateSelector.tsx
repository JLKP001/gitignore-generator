import React, { useState } from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";

import { initialTemplates } from "../templates/templates";
import { TemplateList } from "./TemplateList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(5),
    width: "60%",
    textAlign: "center",
  },
  container: { display: "inline-block" },
  title: {
    textTransform: "capitalize",
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  subTitle: {
    textTransform: "capitalize",
    color: theme.palette.grey[500],
  },
  button: {
    margin: theme.spacing(3),
  },
}));

interface TemplateSelectorProps {
  output: string;
  setOutput: (value: string) => void;
  openDialog: () => void;
}

export const TemplateSelector = ({
  output,
  setOutput,
  openDialog,
}: TemplateSelectorProps) => {
  const classes = useStyles();
  const [templates, setTemplates] = useState(initialTemplates);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    const newTemplates = templates.map((template) => {
      if (template.name !== targetName) {
        return template;
      } else {
        return { ...template, checked: event.target.checked };
      }
    });

    const newOutput = newTemplates
      .map((template) => {
        if (template.checked) {
          return template.data;
        }
        return null;
      })
      .filter((item) => item)
      .join("\n");

    setTemplates(newTemplates);
    setOutput(newOutput);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        select templates
      </Typography>
      <Typography variant="subtitle1" className={classes.subTitle}>
        choose files to ignore from a list of templates
      </Typography>
      <div className={classes.container}>
        <TemplateList templates={templates} handleChange={handleChange} />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={openDialog}
          disabled={output ? false : true}
        >
          show gitignore!
        </Button>
      </div>
    </Paper>
  );
};
