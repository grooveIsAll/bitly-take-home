import { render, screen, fireEvent } from "@testing-library/react";

import Button from "../Button";

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} label="Click Me" />);
  fireEvent.click(screen.getByText(/Click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
