import {useCallback, useState} from "react";
import {createFormElementDefinition} from "./form/FormElementDefinition";
import {FormElement} from "./form/FormElement";

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
                        return <FormElement key={`form-element-${index}`}/>
                    })
                }
            </div>
        </div>
    );
}

export default App;
