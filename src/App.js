import {useCallback, useState} from "react";
import {createFormElementDefinition} from "./form/FormElementDefinition";

const App = () => {
    const [definitions, setDefinitions] = useState([])
    const addElement = useCallback(() => {
        setDefinitions(e => [...e, createFormElementDefinition()])
    }, [setDefinitions])

    return (
        <div className="App">
            <h1>Form Builder</h1>
            <button onClick={addElement} data-testid="add-form-element-button">
                Add Form Element
            </button>
            <div data-testid="form-builder">
                <h2>Editor</h2>
                {
                    definitions.map((definition, index) => {
                        return <div key={`form-element-${index}`} data-testid="question-builder"/>
                    })
                }
            </div>
            <div data-testid="form-preview">
                <h2>Preview</h2>
                {
                    definitions.map((definition, index) => {
                        return <div key={`question-${index}`} data-testid="question-preview"/>
                    })
                }
            </div>
        </div>
    );
}

export default App;
