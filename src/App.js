import {useCallback, useState} from "react";
import {createFormElementDefinition} from "./form/FormElementDefinition";
import {QuestionPreview} from "./form/preview/QuestionPreview";
import QuestionBuilder from "./form/builder/QuestionBuilder";

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
        <div className="App">
            <h1>Form Builder</h1>
            <button onClick={addNewFormElement} data-testid="add-form-element-button">
                Add Form Element
            </button>
            <div data-testid="form-builder">
                <h2>Editor</h2>
                {
                    formElementDefinitions.map((definition, index) => {
                        return <QuestionBuilder key={`form-element-${index}`}
                                                setDefinition={setDefinition}
                                                definition={definition}/>
                    })
                }
            </div>
            <div data-testid="form-preview">
                <h2>Preview</h2>
                {
                    formElementDefinitions.map((definition, index) => {
                        return <QuestionPreview key={`question-${index}`} definition={definition}/>
                    })
                }
            </div>
        </div>
    );
}

export default App;
