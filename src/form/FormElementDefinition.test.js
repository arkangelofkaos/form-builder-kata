import {createFormElementDefinition} from "./FormElementDefinition";

describe("FormElementDefinition", () => {
    it("define the contract for this type", async () => {
        const defintion = createFormElementDefinition();
        expect(defintion).toEqual({
            label: "",
            name: "",
            placeholder: "",
        })
    });
});