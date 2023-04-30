import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ComponentWithContextStub } from "../test-helpers";
import CharacterProfile from "../CharacterProfile";

test("displays the header copy", () => {
  render(<ComponentWithContextStub component={<CharacterProfile hideLoading />} />);

  expect(screen.getByTestId("heading")).toHaveTextContent("Character Stats");
});
