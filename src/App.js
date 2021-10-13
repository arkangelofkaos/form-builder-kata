import {useCallback, useState} from "react";
import {createFormElementDefinition} from "./form/FormElementDefinition";

const App = () => {
    const [formElements, setFormElements] = useState([])
    const addElement = useCallback(() => {
        setFormElements(e => [...e, createFormElementDefinition()])
    }, [setFormElements])

    return (
        <div className="App">
            <h1>Form Builder</h1>
            <button onClick={addElement} data-testid="add-form-element-button">
                Add Form Element
            </button>
            <div>
                {
                    formElements.map((formElement, index) => {
                        return <input key={`form-element-${index}`} data-testid="form-element"/>
                    })
                }
            </div>
        </div>
    );
}

export default App;
