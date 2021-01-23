import React from "react";
import { render, screen } from "@testing-library/react";
import { MessageBar } from "./MessageBar";

test("test if snackbar rendered with message", () => {
  render(
    <MessageBar
      openSnackbar={true}
      handleCloseSnackbar={() => null}
      snackbarMsg="testing snackbar"
    />
  );
  const text = screen.getByText(/testing snackbar/i);
  expect(text).toBeInTheDocument();
});

test("test if snackbar hidden", () => {
  render(
    <MessageBar
      openSnackbar={false}
      handleCloseSnackbar={() => null}
      snackbarMsg="testing snackbar"
    />
  );
  const text = screen.queryByText(/testing snackbar/i);
  expect(text).not.toBeInTheDocument();
});
