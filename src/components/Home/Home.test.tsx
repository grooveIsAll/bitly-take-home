import { MemoryRouter } from "react-router";
import { render, screen, } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const btnElement = screen.getByText(/Hello Multiverse World!/i);
  expect(btnElement).toBeInTheDocument();
});
