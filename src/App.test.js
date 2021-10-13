import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';

it('renders Form Builder app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Form Builder/);
  expect(titleElement).toBeInTheDocument();
});

it("clicking the AddFormElement button adds a new form builder element and a preview of the new question", async () => {
  render(<App />);
  const button = screen.getByTestId("add-form-element-button");
  fireEvent.click(button)

  const formBuildingElements = within(screen.queryByTestId("form-builder")).queryAllByTestId("question-builder")
  expect(formBuildingElements).toHaveLength(1)

  const previewQuestions = within(screen.queryByTestId("form-preview")).queryAllByTestId("question-preview")
  expect(previewQuestions).toHaveLength(1)
});