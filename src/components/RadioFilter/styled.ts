import { styled } from "styled-components"

export const RadioFilter = styled.div`
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 232px;
  height: 252px;
  grid-area: 1 / 1 / 3 / 2;
`
export const Title = styled.h2`
  margin-bottom: 16px;
  margin-top: 16px;
  font-size: 12px;
  text-align: center;
`
export const RadioInput = styled.input`
  margin: 0 10px 0 0;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f1fcff;
  }
`
export const LabelText = styled.span`
  margin-left: 10px;
  font-size: 13px;
`
