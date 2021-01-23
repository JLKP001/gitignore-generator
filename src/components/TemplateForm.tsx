import React, { useState } from "react";
import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import { initialTemplates } from "../templates/templates";

const useStyles = makeStyles((theme) => ({
  root: { display: "inline-block" },
  listItems: { paddingTop: "0", paddingBottom: "0" },
  listItemsText: { textTransform: "capitalize" },
  button: {
    margin: theme.spacing(3),
  },
}));

interface TemplateFormProps {
  output: string;
  setOutput: (value: string) => void;
  openDialog: () => void;
}

export const TemplateForm = ({
  output,
  setOutput,
  openDialog,
}: TemplateFormProps) => {
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
    <div className={classes.root}>
      <List component="div">
        {templates.map((template) => (
          <ListItem key={template.name} className={classes.listItems}>
            <Checkbox
              checked={template.checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
              name={template.name}
            />
            <ListItemText
              primary={template.name}
              className={classes.listItemsText}
            />
          </ListItem>
        ))}
      </List>
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
  );
};
