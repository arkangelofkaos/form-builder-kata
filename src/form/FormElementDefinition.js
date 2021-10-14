export function createFormElementDefinition(id, name = "") {
    return {
        id,
        type: "text",
        name,
        label: "",
        placeholder: "",
    };
}