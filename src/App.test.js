import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Form Builder app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Form Builder/);
  expect(titleElement).toBeInTheDocument();
});

it("renders the AddFormElement button", async () => {
  render(<App />);
  const button = screen.getByTestId("add-form-element-button");
  expect(button).toBeInTheDocument();
});
