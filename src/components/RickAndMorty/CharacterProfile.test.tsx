import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterProfile from './CharacterProfile';

test('displays the header copy', () => {
  render(<CharacterProfile />);
  expect(screen.getByRole('heading')).toHaveTextContent("Character Stats")
});
