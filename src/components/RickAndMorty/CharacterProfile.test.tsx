import { MemoryRouter } from "react-router";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CharacterContext, defaultState } from './CharacterContextProvider'
import CharacterProfile from './CharacterProfile';

test('displays the header copy', () => {
  render(
    <MemoryRouter>
      <CharacterContext.Provider value={defaultState}>
        <CharacterProfile hideLoading />
      </CharacterContext.Provider>
    </MemoryRouter>
  )

  expect(screen.getByTestId('heading')).toHaveTextContent("Character Stats")
});
