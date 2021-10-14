import {fireEvent, render, screen} from "@testing-library/react";
import QuestionBuilder from "./QuestionBuilder";

describe("QuestionBuilder", () => {
    it("configure the label", async () => {
        const emptyDefinition = {label: "",}
        let outputTestDefinition = null
        const setDefinition = (id, def) => {
            outputTestDefinition = def
        }

        render(<QuestionBuilder definition={emptyDefinition} setDefinition={setDefinition}/>);
        const labelInput = screen.getByTestId("label-input");
        fireEvent.change(labelInput, {target: {value: "My Test Label"}})
        expect(outputTestDefinition.label).toEqual("My Test Label");
    });

});