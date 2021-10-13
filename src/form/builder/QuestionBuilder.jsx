import {useCallback} from "react";

const QuestionBuilder = ({definition, setDefinition}) => {
    const setQuestionName = useCallback((e) => {
        const newQuestionName = e.target.value
        setDefinition(definition.id, {
            ...definition,
            name: newQuestionName
        })
    }, [definition, setDefinition])

    return <div data-testid="question-builder">
        <label>
            Question Name:
            <input data-testid="name-input"
                   value={definition.name}
                   onChange={setQuestionName}/>
        </label>
    </div>
}

export default QuestionBuilder