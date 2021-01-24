import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TemplateSelector } from "./TemplateSelector";

const n_checked = (checkboxes: Array<HTMLElement>) =>
  checkboxes.filter((checkbox) => checkbox.checked).length;

test("test if TemplateSelector rendered", () => {
  const do_nothing = () => {};
  render(
    <TemplateSelector
      output=""
      setOutput={do_nothing}
      openDialog={do_nothing}
    />
  );
  const title = screen.getByText(/select templates/i);
  expect(title).toBeInTheDocument();

  const subtitle = screen.getByText(
    /choose files to ignore from a list of templates/i
  );
  expect(subtitle).toBeInTheDocument();

  const checkboxes = screen.getAllByLabelText(/checkbox/i);
  expect(checkboxes).toHaveLength(11);
  expect(n_checked(checkboxes)).toEqual(0);

  const show_button = screen.getByRole("button", { name: /show gitignore/i });
  expect(show_button).toBeInTheDocument();
  expect(show_button).toHaveAttribute("disabled");
});

test("test checking and unchecking checkboxes", () => {
  const do_nothing = () => {};
  render(
    <TemplateSelector
      output=""
      setOutput={do_nothing}
      openDialog={do_nothing}
    />
  );
  const checkboxes = screen.getAllByLabelText(/checkbox/i);
  expect(n_checked(checkboxes)).toEqual(0);

  fireEvent.click(checkboxes[3]);
  expect(n_checked(checkboxes)).toEqual(1);
  fireEvent.click(checkboxes[3]);
  expect(n_checked(checkboxes)).toEqual(0);
  fireEvent.click(checkboxes[7]);
  expect(n_checked(checkboxes)).toEqual(1);
  fireEvent.click(checkboxes[5]);
  expect(n_checked(checkboxes)).toEqual(2);
  fireEvent.click(checkboxes[2]);
  expect(n_checked(checkboxes)).toEqual(3);
  fireEvent.click(checkboxes[5]);
  expect(n_checked(checkboxes)).toEqual(2);
  fireEvent.click(checkboxes[3]);
  expect(n_checked(checkboxes)).toEqual(3);
  fireEvent.click(checkboxes[8]);
  expect(n_checked(checkboxes)).toEqual(4);
  fireEvent.click(checkboxes[5]);
  expect(n_checked(checkboxes)).toEqual(5);
});
