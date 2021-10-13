import {useCallback, useState} from "react";
import {createFormElementDefinition} from "./form/FormElementDefinition";
import styled from "styled-components";
import Editor from "./form/editor/Editor";
import FormPreview from "./form/preview/FormPreview";

const App = () => {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [definitions, setDefinitions] = useState({})

    const setDefinition = useCallback((definitionId, newDefinition) => {
        setDefinitions(defs => {
            return {
                ...defs,
                [definitionId]: newDefinition,
            }
        })
    }, [setDefinitions])

    const addNewFormElement = useCallback(() => {
        const defaultQuestionName = `Question ${questionNumber}`
        setDefinition(questionNumber, createFormElementDefinition(questionNumber, defaultQuestionName))
        setQuestionNumber(n => n + 1)
    }, [questionNumber, setQuestionNumber, setDefinition])

    const formElementDefinitions = Object.values(definitions);
    return (
        <FormBuilderApp className="App">
            <h1>Form Builder</h1>
            <button onClick={addNewFormElement} data-testid="add-form-element-button">
                Add Form Element
            </button>
            <SideBySide>
                <Editor definitions={formElementDefinitions} setDefinition={setDefinition}/>
                <FormPreview definitions={formElementDefinitions}/>
            </SideBySide>
        </FormBuilderApp>
    );
}

const FormBuilderApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SideBySide = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

export default App;
