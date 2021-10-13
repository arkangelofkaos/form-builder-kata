export const QuestionPreview = ({definition}) => {
    const {name, label, placeholder} = definition

    return <div>
        <div>{name}</div>
        <label>
            {label}
            <input data-testid="question-preview" placeholder={placeholder}/>
        </label>
    </div>
}