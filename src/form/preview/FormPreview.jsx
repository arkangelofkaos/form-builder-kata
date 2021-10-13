import {QuestionPreview} from "./QuestionPreview";
import styled from "styled-components";

const FormPreview = ({definitions}) => {
    return <QuestionList data-testid="form-preview">
        <h2>Preview</h2>
        {
            definitions.map((definition, index) => {
                return <QuestionPreview key={`question-${index}`}
                                        className="question"
                                        definition={definition}/>
            })
        }
    </QuestionList>
}

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  .question {
    margin-bottom: 18px;
  }
`

export default FormPreview