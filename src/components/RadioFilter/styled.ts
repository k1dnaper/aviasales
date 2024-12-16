import { styled } from "styled-components"

export const RadioFilter = styled.div`
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 232px;
  height: 252px;
  margin: 130px auto;
`
export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  text-align: center;
`
export const RadioInput = styled.input`
  margin: 0 8px 0 0;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover ${RadioInput} {
    background-color: #f0f0f0;
  }

  ${RadioInput}:checked + span {
    background-color: #f1fcff;
  }
`
export const LabelText = styled.span`
  margin-left: 8px;
`
