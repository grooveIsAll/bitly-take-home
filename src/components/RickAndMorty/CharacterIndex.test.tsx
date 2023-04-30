import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterIndex from './CharacterIndex';

test('displays the page subheader copy', () => {
  render(<CharacterIndex />);
  // const paragraphElement = screen.getByText(/G/i);
  // expect(paragraphElement).toBeInTheDocument();

  const imgElement = screen.getByAltText(/logo/i);
  expect(imgElement).toBeInTheDocument();
  // expect(screen.getByRole('textbox')).toHaveTextContent("et the deets on your favorite interdimesional characters...")
});
