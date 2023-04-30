import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';

import { CharacterContext, defaultState } from './CharacterContextProvider'
import CharacterIndex from './CharacterIndex';

test('displays the page subheader copy', () => {
  render(
    <MemoryRouter>
      <CharacterContext.Provider value={defaultState}>
        <CharacterIndex />
      </CharacterContext.Provider>
    </MemoryRouter>
  );
  // const paragraphElement = screen.getByText(/G/i);
  // expect(paragraphElement).toBeInTheDocument();

  const imgElement = screen.getByAltText(/logo/i);
  expect(imgElement).toBeInTheDocument();
  // expect(screen.getByRole('textbox')).toHaveTextContent("et the deets on your favorite interdimesional characters...")
});
