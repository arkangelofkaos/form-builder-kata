import {useCallback, useState} from "react";
import {createFormElementDefinition} from "./form/FormElementDefinition";
import {QuestionPreview} from "./form/preview/QuestionPreview";
import styled from "styled-components";
import {QuestionBuilderList} from "./form/builder/QuestionBuilderList";

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
        const questionName = `Question ${questionNumber}`
        setDefinition(questionNumber, createFormElementDefinition(questionNumber, questionName))
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
                <QuestionBuilderList definitions={formElementDefinitions} setDefinition={setDefinition}/>
                <div data-testid="form-preview">
                    <h2>Preview</h2>
                    {
                        formElementDefinitions.map((definition, index) => {
                            return <QuestionPreview key={`question-${index}`} definition={definition}/>
                        })
                    }
                </div>
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
