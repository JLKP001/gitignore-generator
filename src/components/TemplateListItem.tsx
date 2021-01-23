import React from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import { TemplateType } from "../templates/templates";

const useStyles = makeStyles({
  listItems: { paddingTop: "0", paddingBottom: "0" },
  listItemsText: { textTransform: "capitalize" },
});

interface TemplateListItemProps {
  template: TemplateType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TemplateListItem = ({
  template,
  handleChange,
}: TemplateListItemProps) => {
  const classes = useStyles();

  return (
    <ListItem key={template.name} className={classes.listItems}>
      <Checkbox
        checked={template.checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
        name={template.name}
      />
      <ListItemText primary={template.name} className={classes.listItemsText} />
    </ListItem>
  );
};
