import React from "react";
import { render, screen } from "@testing-library/react";
import { OutputDialog } from "./OutputDialog";

test("test if OutputDialog rendered correctly", () => {
  const do_nothing = () => {};
  const output_data = "test_data";

  render(
    <OutputDialog
      handleClose={do_nothing}
      open={true}
      output={output_data}
      handleOpenSnackbar={do_nothing}
    />
  );
  const title = screen.getByText(/gitignore file/i);
  expect(title).toBeInTheDocument();

  const output = screen.getByText(/test_data/i);
  expect(output).toBeInTheDocument();

  const copyButton = screen.getByRole("button", { name: /copy to clipboard/i });
  expect(copyButton).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});
