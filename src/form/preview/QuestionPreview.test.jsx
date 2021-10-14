import {render, screen} from "@testing-library/react";
import {QuestionPreview} from "./QuestionPreview";

describe("QuestionPreview", () => {
    describe("given a form element definition", () => {
        const testDefinition = {
            name: "This is an example question, what do you think?",
            label: "Your Answer:",
            placeholder: "hello, world!"
        }

        it("renders the placeholder", async () => {
            render(<QuestionPreview definition={testDefinition} />);
            const formInput = screen.getByPlaceholderText(testDefinition.placeholder);
            expect(formInput).toBeInTheDocument();
        });

        it("renders the label", async () => {
            render(<QuestionPreview definition={testDefinition} />);
            const labelledComponent = screen.getByText(testDefinition.label);
            expect(labelledComponent).toBeInTheDocument();
        });

        it("renders the name", async () => {
            render(<QuestionPreview definition={testDefinition} />);
            const questionName = screen.getByText(testDefinition.name);
            expect(questionName).toBeInTheDocument();
        });

        it("renders a checkbox if it is a checkbox type", async () => {
            render(<QuestionPreview definition={{...testDefinition, type: "checkbox"}} />);
            const checkbox = screen.getByRole("checkbox");
            expect(checkbox).toBeInTheDocument();
        });
    });

});