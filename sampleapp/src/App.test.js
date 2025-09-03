import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the logo image', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});
