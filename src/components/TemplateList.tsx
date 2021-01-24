import React from "react";
import { List } from "@material-ui/core";

import { TemplateType } from "../templates/templates";
import { TemplateListItem } from "./TemplateListItem";

interface TemplateListProps {
  templates: Array<TemplateType>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TemplateList = ({
  templates,
  handleChange,
}: TemplateListProps) => {
  return (
    <List component="div">
      {templates.map((template) => (
        <TemplateListItem
          key={template.name}
          template={template}
          handleChange={handleChange}
        />
      ))}
    </List>
  );
};
