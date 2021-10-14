export const QuestionPreview = ({className, definition}) => {
    const {name, label, placeholder} = definition

    if (definition.type === "checkbox") {
        return <div className={className} data-testid="question-preview">
            <div>{name}</div>
            <label>
                {label}
                <input type="checkbox"/>
            </label>
        </div>
    }

    return <div className={className} data-testid="question-preview">
        <div>{name}</div>
        <label>
            {label}
            <input placeholder={placeholder}/>
        </label>
    </div>
}