import { render, screen } from "@testing-library/react";
import Dropdown from "../dropdown.tsx"; 

test("renders dropdown with correct title", () => {
  const title = "Test Title";
  render(<Dropdown dropdownTitle={title} dropdownArray={[]} />);
  
  // Check if the title is rendered inside the button
  const buttonTitle = screen.getByText("Test Title");
  expect(buttonTitle).toBeInTheDocument();
});
