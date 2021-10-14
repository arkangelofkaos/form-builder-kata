import styled from "styled-components";

export const QuestionPreview = ({className, definition}) => {
    const {name, label, placeholder} = definition

    if (definition.type === "checkbox") {
        return <Question className={className} name={name} label={label}
                         inputComponent={<input type="checkbox"/>}/>
    }

    return <Question className={className} name={name} label={label}
                     inputComponent={<input placeholder={placeholder}/>}/>
}

const Question = ({className, name, label, inputComponent}) => {
    return <QuestionContainer className={className} data-testid="question-preview">
        <QuestionName>{name}</QuestionName>
        <Answer>
            <LabelText text={label}/>
            {inputComponent}
        </Answer>
    </QuestionContainer>
}

const QuestionContainer = styled.div`
  padding: 32px 24px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`

const QuestionName = styled.div`
  font-weight: 450;
  margin-bottom: 12px;
`

const Answer = styled.label`
  display: flex;
  align-items: center;
  .question-label {
    margin-right: 3px;
  }

  input {
    margin: 0;
  }
`

const LabelText = ({text}) => {
    if (!text) {
        return null
    }

    return <div className="question-label">{text}</div>
}