export const QuestionPreview = ({definition}) => {
    const {name, label, placeholder} = definition

    return <div data-testid="question-preview">
        <div>{name}</div>
        <label>
            {label}
            <input placeholder={placeholder}/>
        </label>
    </div>
}