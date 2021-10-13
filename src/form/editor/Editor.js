import QuestionBuilder from "./QuestionBuilder";
import styled from "styled-components";

const Editor = ({definitions, setDefinition}) => {
    return <FormBuilder data-testid="form-builder">
        <h2>Editor</h2>
        {
            definitions.map((definition, index) => {
                return <QuestionBuilder key={`form-element-${index}`}
                                        className={"question-builder"}
                                        setDefinition={setDefinition}
                                        definition={definition}/>
            })
        }
    </FormBuilder>
}

const FormBuilder = styled.div`
  .question-builder {
    margin-bottom: 36px;
  }
`

export default Editor
