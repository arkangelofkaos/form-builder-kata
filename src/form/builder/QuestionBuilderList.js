import QuestionBuilder from "./QuestionBuilder";
import styled from "styled-components";

export const QuestionBuilderList = ({definitions, setDefinition}) => {
    return <BuilderList data-testid="form-builder">
        <h2>Editor</h2>
        {
            definitions.map((definition, index) => {
                return <QuestionBuilder key={`form-element-${index}`}
                                        className={"question-builder"}
                                        setDefinition={setDefinition}
                                        definition={definition}/>
            })
        }
    </BuilderList>
}

const BuilderList = styled.div`
    .question-builder {
      margin-bottom: 24px;
    }
`
