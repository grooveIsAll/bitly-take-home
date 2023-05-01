import { render, screen } from "@testing-library/react";

import { ComponentWithContextStub } from "../test-helpers";
import CharacterProfile from "../CharacterProfile";

describe("CharacterProfile component", () => {
  test("displays the header copy", () => {
    render(<ComponentWithContextStub component={<CharacterProfile hideLoading />} />);

    expect(screen.getByTestId("heading")).toHaveTextContent("Character Stats");
  });
})