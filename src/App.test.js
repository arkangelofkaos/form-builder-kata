import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Form Builder app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Form Builder/);
  expect(titleElement).toBeInTheDocument();
});
