import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterIndex from './CharacterIndex';

test('displays the page subheader copy', () => {
  render(<CharacterIndex />);
  const paragraphElement = screen.getByText(/Get some fun and interesting deets about your favorite interdimesional characters.../i);
  expect(paragraphElement).toBeInTheDocument();
});
