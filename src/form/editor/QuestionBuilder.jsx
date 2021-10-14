import {useCallback} from "react";
import styled from "styled-components";

const QuestionBuilder = ({className, definition, setDefinition}) => {
    const onTypeChange = useCallback((e) => {
        const newType = e.target.value
        setDefinition(definition.id, {
            ...definition,
            type: newType
        })
    }, [definition, setDefinition])

    const setQuestionName = useCallback((e) => {
        const newQuestionName = e.target.value
        setDefinition(definition.id, {
            ...definition,
            name: newQuestionName
        })
    }, [definition, setDefinition])

    const setLabel = useCallback((e) => {
        const newLabel = e.target.value
        setDefinition(definition.id, {
            ...definition,
            label: newLabel
        })
    }, [definition, setDefinition])

    return <BuilderContainer className={className} data-testid="question-builder">
        <div className="heading">Question #{definition.id}</div>
        <label className="type-editor">
            Type
            <select data-testid="type-select" onChange={onTypeChange}>
                <option value="text">Text</option>
                <option value="checkbox">Checkbox</option>
            </select>
        </label>
        <label className="name-editor">
            <div>Name</div>
            <input data-testid="name-input"
                   value={definition.name}
                   onChange={setQuestionName}/>
        </label>
        <label className="label-editor">
            <div>Label</div>
            <input data-testid="label-input"
                   value={definition.label}
                   onChange={setLabel}/>
        </label>
    </BuilderContainer>
}

const BuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: skyblue;
  padding: 12px 24px;
  
  .heading {
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  .type-editor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  
  .name-editor, .label-editor {
    margin-bottom: 6px;
  }
`

export default QuestionBuilder