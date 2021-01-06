import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

test("renders About comp.", () => {
  render(<About />);
  const linkElement1 = screen.getByText(/hello in about/i);
  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByPlaceholderText("Username");
  expect(linkElement2).toBeInTheDocument();
});
