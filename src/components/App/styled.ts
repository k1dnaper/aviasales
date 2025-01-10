import { styled } from "styled-components"
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f7fa;
`
const MainPage = styled.section`
  font-family: "Open Sans";
  font-style: normal;
  display: grid;
  width: 100%;
  max-width: 1200px;
  grid-template-columns: 1fr 2fr;
`

export { MainPage }
