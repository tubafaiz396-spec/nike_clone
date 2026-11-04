import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Nike home experience', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /feel the flight/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /featured products/i })).toBeInTheDocument();
});
