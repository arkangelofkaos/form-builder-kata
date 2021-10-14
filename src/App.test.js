import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

it('renders Form Builder app', () => {
  render(<App />);
  const titleElement = screen.getByText("Form Builder");
  expect(titleElement).toBeInTheDocument();
});

it("adds a new question to the form and configures the question name", async () => {
  render(<App />);
  const button = screen.getByTestId("add-form-element-button");
  fireEvent.click(button)

  const builder = within(screen.queryByTestId("form-builder")).getByTestId("question-builder")
  expect(builder).toBeInTheDocument()

  const previewQuestions = within(screen.queryByTestId("form-preview")).getByTestId("question-preview")
  expect(previewQuestions).toBeInTheDocument()
  const expectedDefaultQuestionName = "Question 1";
  expect(within(previewQuestions).getByText(expectedDefaultQuestionName)).toBeInTheDocument()

  userEvent.clear(within(builder).getByTestId("name-input"))
  userEvent.type(within(builder).getByTestId("name-input"), "What is the Matrix?")
  expect(within(previewQuestions).getByText("What is the Matrix?")).toBeInTheDocument()
});

it("can add a checkbox question", async () => {
  render(<App />);
  const button = screen.getByTestId("add-form-element-button");
  fireEvent.click(button)

  const builder = within(screen.queryByTestId("form-builder")).getByTestId("question-builder")

  fireEvent.change(within(builder).getByTestId("type-select"), {target: {value: "checkbox"}})

  const previewQuestions = within(screen.queryByTestId("form-preview")).getByTestId("question-preview")
  const checkbox = within(previewQuestions).getByRole("checkbox")
  expect(checkbox).toBeInTheDocument()
});