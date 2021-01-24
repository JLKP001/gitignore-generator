import React from "react";
import { render, screen } from "@testing-library/react";
import { TemplateList } from "./TemplateList";

test("test if TemplateList rendered correctly", () => {
  const do_nothing = () => {};
  const templates = [
    { name: "test_1", data: "test_data_1", checked: false },
    { name: "test_2", data: "test_data_1", checked: false },
    { name: "test_3", data: "test_data_1", checked: true },
    { name: "test_4", data: "test_data_1", checked: false },
  ];

  render(<TemplateList templates={templates} handleChange={do_nothing} />);
  const name = screen.getAllByText(/test/i);
  expect(name).toHaveLength(4);

  const data = screen.queryByText(/test_data/i);
  expect(data).not.toBeInTheDocument();

  const checkbox = screen.getAllByLabelText(/checkbox/i);
  expect(checkbox).toHaveLength(4);
});
