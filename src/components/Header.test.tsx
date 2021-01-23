import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("check if header title rendered", () => {
  render(<Header />);
  const title = screen.getByText(/gitignore generator/i);
  expect(title).toBeInTheDocument();
});

test("check if header icon rendered", () => {
  render(<Header />);
  const icon = screen.getByTestId("icon");
  expect(icon).toBeInTheDocument();
});
