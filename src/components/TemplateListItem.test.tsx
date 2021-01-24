import React from "react";
import { render, screen } from "@testing-library/react";
import { TemplateListItem } from "./TemplateListItem";

test("test if TemplateListItem rendered", () => {
  const do_nothing = () => {};
  render(
    <TemplateListItem
      template={{ name: "test", data: "test_data", checked: true }}
      handleChange={do_nothing}
    />
  );
  const name = screen.getByText(/test/i);
  expect(name).toBeInTheDocument();

  const data = screen.queryByText(/test_data/i);
  expect(data).not.toBeInTheDocument();

  const checkbox = screen.getByLabelText(/checkbox/i);
  expect(checkbox).toBeInTheDocument();
  expect(checkbox.checked).toEqual(true);
});
