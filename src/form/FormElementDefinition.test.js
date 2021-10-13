import {createFormElementDefinition} from "./FormElementDefinition";

describe("FormElementDefinition", () => {
    it("define the contract for this type", async () => {
        const defintion = createFormElementDefinition(0);
        expect(defintion).toEqual({
            id: 0,
            label: "",
            name: "",
            placeholder: "",
        })
    });
});