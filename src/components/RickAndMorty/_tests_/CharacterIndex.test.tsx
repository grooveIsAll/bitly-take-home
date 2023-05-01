import { render, screen, fireEvent } from "@testing-library/react";

import CharacterIndex from "../CharacterIndex";
import { ComponentWithContextStub } from "../test-helpers";

describe("CharacterIndex component", () => {
  test("displays the page subheader copy", () => {
    render(<ComponentWithContextStub component={<CharacterIndex />} />);
    expect(screen.getByRole("textbox")).toHaveTextContent(
      "Get the deets on your favorite interdimesional characters..."
    );
  });

  test("displays logo the page", () => {
    render(<ComponentWithContextStub component={<CharacterIndex />} />);
    const imgElement = screen.getByAltText(/logo/i);
    expect(imgElement).toBeInTheDocument();
  });

  test("page to rerender on button click", () => {
    render(<ComponentWithContextStub component={<CharacterIndex />} />);
    const randomCharactersButton = screen.getByText("Get random characters");

    // fireEvent.click(randomCharactersButton)
    // console.log(props)
  });
});
