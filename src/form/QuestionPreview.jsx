export const QuestionPreview = ({definition}) => {
    const {label, placeholder} = definition

    return <label>
        {label}
        <input data-testid="question-preview" placeholder={placeholder}/>
    </label>
}