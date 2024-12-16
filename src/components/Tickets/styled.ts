import { styled } from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
  height: 184px;
  width: 502px;
  margin: 20px;
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
  margin-bottom: 10px;
  height: 40px;
`
export const FlightDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
`

export const FlightTitle = styled.h3`
  font-size: 18px;
  color: gray;
  margin: 5px 0;
`

export const FlightText = styled.p`
  font-size: 18px;
  color: black;
  margin: 5px 0;
  font-weight: bold;
`

export const FlightDuration = styled.div`
  font-size: 18px;
  color: gray;
  margin: 5px 0;
`
export const StopsText = styled.p`
  font-size: 18px;
  color: gray;
  margin: 5px 0;
`

export const StopsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StopsTextBold = styled.h3`
  font-size: 18px;
  color: black;
  margin: 5px 0;
`
