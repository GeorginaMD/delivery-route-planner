import React from "react";
import LocationItem from "./LocationItem";
import { render, screen } from "@testing-library/react";

test("renders lab name", () => {
    const mockLab = { id: "1", name: "Lab A" };

    render(<LocationItem lab={mockLab} />);

    expect(screen.getByText("Lab A")).toBeInTheDocument();
});

test("handles undefined lab", () => {
  render(<LocationItem lab={undefined} />);

  expect(screen.getByText("No data")).toBeInTheDocument();
});