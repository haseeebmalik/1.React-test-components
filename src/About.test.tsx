import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

test("renders About comp.", () => {
  render(<About />);
  const linkElement = screen.getByText(/hello in about/i);
  expect(linkElement).toBeInTheDocument();
});
