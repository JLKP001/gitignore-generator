import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElement,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MainBody } from "./MainBody";

import go_data from "../templates/go";

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

jest.spyOn(navigator.clipboard, "writeText");

const n_checked = (checkboxes: Array<HTMLElement>) =>
  checkboxes.filter((checkbox) => checkbox.checked).length;

test("test button enabled when one or more options checked", () => {
  render(<MainBody />);
  const checkboxes = screen.getAllByLabelText(/checkbox/i);
  expect(n_checked(checkboxes)).toEqual(0);

  const showButton = screen.getByRole("button", { name: /show gitignore/i });
  expect(showButton).toHaveAttribute("disabled");

  fireEvent.click(checkboxes[3]);
  expect(n_checked(checkboxes)).toEqual(1);
  expect(showButton).not.toHaveAttribute("disabled");

  fireEvent.click(checkboxes[5]);
  expect(n_checked(checkboxes)).toEqual(2);
  expect(showButton).not.toHaveAttribute("disabled");

  fireEvent.click(checkboxes[3]);
  expect(n_checked(checkboxes)).toEqual(1);
  expect(showButton).not.toHaveAttribute("disabled");

  fireEvent.click(checkboxes[5]);
  expect(n_checked(checkboxes)).toEqual(0);
  expect(showButton).toHaveAttribute("disabled");
});

test("test output dialog shows correct content", () => {
  render(<MainBody />);
  const checkboxes = screen.getAllByLabelText(/checkbox/i);
  const showButton = screen.getByRole("button", { name: /show gitignore/i });

  let dialogTitle = screen.queryByText(/gitignore file/i);
  expect(dialogTitle).not.toBeInTheDocument();

  fireEvent.click(checkboxes[3]);
  fireEvent.click(showButton);

  dialogTitle = screen.getByText(/gitignore file/i);
  expect(dialogTitle).toBeInTheDocument();

  const dialogContent = screen.getByText(/# go/i);
  expect(dialogContent).toBeInTheDocument();
});

test("test gitignore copied to clipboard successfully", async () => {
  render(<MainBody />);
  const checkboxes = screen.getAllByLabelText(/checkbox/i);
  const showButton = screen.getByRole("button", { name: /show gitignore/i });

  fireEvent.click(checkboxes[3]);
  fireEvent.click(showButton);

  const copyButton = screen.getByRole("button", { name: /copy to clipboard/i });
  fireEvent.click(copyButton);

  expect(navigator.clipboard.writeText).toHaveBeenCalledWith(go_data);

  const successMessage = await screen.findByText(
    /copied to clipboard successfully/i
  );
  expect(successMessage).toBeInTheDocument();

  // Close Modal
  const closeButton = screen.getByRole("button", { name: /close/i });
  fireEvent.click(closeButton);
  await waitFor(() => {
    expect(screen.queryByText(/gitignore file/i)).not.toBeInTheDocument();
  });

  // Close Success Message
  fireEvent.click(screen.getByRole("button", { name: /close/i }));
  await waitFor(() => {
    expect(
      screen.queryByText(/copied to clipboard successfully/i)
    ).not.toBeInTheDocument();
  });
});
