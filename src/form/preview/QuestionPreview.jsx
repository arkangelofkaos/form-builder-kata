export const QuestionPreview = ({className, definition}) => {
    const {name, label, placeholder} = definition

    return <div className={className} data-testid="question-preview">
        <div>{name}</div>
        <label>
            {label}
            <input placeholder={placeholder}/>
        </label>
    </div>
}