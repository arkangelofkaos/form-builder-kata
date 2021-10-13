import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

it('renders Form Builder app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Form Builder/);
  expect(titleElement).toBeInTheDocument();
});

it("clicking the AddFormElement button adds a new form element", async () => {
  render(<App />);
  const button = screen.getByTestId("add-form-element-button");
  fireEvent.click(button)
  const elements = screen.queryAllByTestId("form-element")
  expect(elements).toHaveLength(1)
});
