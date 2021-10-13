import {render, screen} from "@testing-library/react";
import {QuestionPreview} from "./QuestionPreview";

describe("QuestionPreview", () => {
    describe("given a form element definition", () => {
        const definition = {label: "Your Answer:", name: "", placeholder: "hello, world!"}

        it("renders the placeholder", async () => {
            render(<QuestionPreview definition={definition} />);
            const formInput = screen.getByPlaceholderText("hello, world!");
            expect(formInput).toBeInTheDocument();
        });

        it("renders the label", async () => {
            render(<QuestionPreview definition={definition} />);
            const labelledComponent = screen.getByText("Your Answer:");
            expect(labelledComponent).toBeInTheDocument();
        });
    });

});