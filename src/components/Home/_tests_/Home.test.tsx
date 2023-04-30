import { MemoryRouter } from "react-router";
import { render, screen, } from '@testing-library/react';
import Home from '../Home';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const btnElement = screen.getByText(/Learn about Rick and Morty/i);
  expect(btnElement).toBeInTheDocument();
});
