import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const title = screen.getByText(/gitignore generator/i);
  expect(title).toBeInTheDocument();
});
