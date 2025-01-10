import { styled } from "styled-components"

export const MainPage = styled.section`
  background-color: #f3f7fa;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  grid-column: 2 / 3;
`

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
  grid-column: 2;
  height: 144px;
  width: 462px;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  height: auto;
`
export const Price = styled.div`
  font-size: 24px;
  color: #007bff;
  height: 40px;
  font-weight: bold;
`
export const FlightDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
`

export const FlightTitle = styled.div`
  font-size: 12px;
  color: gray;
  margin: 5px 0;
`

export const FlightText = styled.p`
  font-size: 14px;
  color: #4a4a4a;
  margin: 5px 0;
  font-weight: bold;
`

export const FlightDuration = styled.div`
  font-size: 12px;
  color: gray;
  margin: 5px 0;
`
export const StopsText = styled.p`
  font-size: 14px;
  color: gray;
  margin: 5px 0;
`

export const StopsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StopsTextBold = styled.h3`
  font-size: 14px;
  color: #4a4a4a;
  margin: 5px 0;
`
