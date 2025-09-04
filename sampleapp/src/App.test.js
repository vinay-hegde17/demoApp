import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the logo image', () => {
    render(<App />);
    const logoElement = screen.getByAltText(/logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the text', () => {
    render(<App />);
    const textElement = screen.getByText(/learn react/i);
    expect(textElement).toBeInTheDocument();
  });
});