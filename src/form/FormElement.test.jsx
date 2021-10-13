import {render, screen} from "@testing-library/react";
import {FormElement} from "./FormElement";

describe("FormElement", () => {
    it("renders the placeholder from a form element definition", async () => {
        render(<FormElement definition={{label: "", name: "", placeholder: "hello, world!"}} />);
        const formInput = screen.getByPlaceholderText("hello, world!");
        expect(formInput).toBeInTheDocument();
    });
});