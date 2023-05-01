import { MemoryRouter } from "react-router";

import { CharacterContext, defaultCharacterContext } from "./CharacterContextProvider";

export const ComponentWithContextStub = ({
  component
}: {
  component: React.ReactNode
}) => {
  return (
    <MemoryRouter>
      <CharacterContext.Provider value={defaultCharacterContext}>
        {component}
      </CharacterContext.Provider>
    </MemoryRouter>
  );
};