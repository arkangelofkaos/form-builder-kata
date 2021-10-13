export function createFormElementDefinition(id, name = "") {
    return {
        id,
        name,
        label: "",
        placeholder: "",
    };
}