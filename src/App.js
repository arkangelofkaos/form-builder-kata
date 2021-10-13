import {useCallback, useState} from "react";
import {createFormElementDefinition} from "./form/FormElementDefinition";
import {FormElement} from "./form/FormElement";

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
            <div>
                {
                    definitions.map((definition, index) => {
                        return <FormElement key={`form-element-${index}`} definition={definition}/>
                    })
                }
            </div>
        </div>
    );
}

export default App;
