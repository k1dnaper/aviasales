import React from "react"

import { minutesToHoursAndMinutes, convertDate, stopsCounter } from "./math.tsx"
import { Wrapper, Price, LogoImage, FlightDetails, FlightTitle, FlightText, FlightDuration } from "./styled.ts"

export const Tickets = ({ tickets }) => {
  return tickets?.map(({ price, carrier, segments }) => {
    const [firstSegment, secondSegment] = segments
    const {
      origin: firstOrigin,
      destination: firstDestination,
      date: firstDate,
      duration: firstDuration,
      stops: firstStops,
    } = firstSegment
    const {
      origin: secondOrigin,
      destination: secondDestination,
      date: secondDate,
      duration: secondDuration,
      stops: secondStops,
    } = secondSegment
    return (
      <Wrapper key={price}>
        <Price>{price} ₽</Price>
        <LogoImage src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        <FlightDetails>
          <FlightTitle>
            {firstOrigin} - {firstDestination}
            <FlightText>
              {convertDate(firstDate)} - {convertDate(firstDate, firstDuration)}
            </FlightText>
          </FlightTitle>
          <FlightDuration>
            В ПУТИ <FlightText>{minutesToHoursAndMinutes(firstDuration)}</FlightText>
          </FlightDuration>
          {stopsCounter(firstStops)}
        </FlightDetails>
        <FlightDetails>
          <FlightTitle>
            {secondOrigin} - {secondDestination}
            <FlightText>
              {convertDate(secondDate)} - {convertDate(secondDate, secondDuration)}
            </FlightText>
          </FlightTitle>
          <FlightDuration>
            В ПУТИ <FlightText>{minutesToHoursAndMinutes(secondDuration)}</FlightText>
          </FlightDuration>
          {stopsCounter(secondStops)}
        </FlightDetails>
      </Wrapper>
    )
  })
}
