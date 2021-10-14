import {useCallback} from "react";

const QuestionBuilder = ({className, definition, setDefinition}) => {
    const setQuestionName = useCallback((e) => {
        const newQuestionName = e.target.value
        setDefinition(definition.id, {
            ...definition,
            name: newQuestionName
        })
    }, [definition, setDefinition])

    const onTypeChange = useCallback((e) => {
        const newType = e.target.value
        setDefinition(definition.id, {
            ...definition,
            type: newType
        })
    }, [definition, setDefinition])

    return <div className={className} data-testid="question-builder">
        <label>
            Question Type:
            <select data-testid="type-select" onChange={onTypeChange}>
                <option value="text">Text</option>
                <option value="checkbox">Checkbox</option>
            </select>
        </label>
        <label>
            <div>Question Name</div>
            <input data-testid="name-input"
                   value={definition.name}
                   onChange={setQuestionName}/>
        </label>
    </div>
}

export default QuestionBuilder