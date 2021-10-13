import {useCallback} from "react";

const QuestionBuilder = ({className, definition, setDefinition}) => {
    const setQuestionName = useCallback((e) => {
        const newQuestionName = e.target.value
        setDefinition(definition.id, {
            ...definition,
            name: newQuestionName
        })
    }, [definition, setDefinition])

    return <div className={className} data-testid="question-builder">
        <label>
            <div>Question Name</div>
            <input data-testid="name-input"
                   value={definition.name}
                   onChange={setQuestionName}/>
        </label>
    </div>
}

export default QuestionBuilder