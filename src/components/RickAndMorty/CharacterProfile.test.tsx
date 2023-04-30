import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterProfile from './CharacterProfile';

test('displays the header copy', () => {
  render(<CharacterProfile />);
  const headerElement = screen.getByText(/Character Stats/i);
  expect(headerElement).toBeInTheDocument();
});
