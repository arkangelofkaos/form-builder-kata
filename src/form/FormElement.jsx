export const FormElement = ({definition}) => {
    const {placeholder} = definition

    return <input data-testid="form-element" placeholder={placeholder}/>
}