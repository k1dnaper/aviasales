import { styled } from "styled-components"

export const WrapperFilter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 504px;
`
export const Button = styled.button`
  font-size: 12px;
  width: 168px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  color: gray;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`
