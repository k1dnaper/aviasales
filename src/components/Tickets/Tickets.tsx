import React, { useEffect, useState } from "react"

import FilterRadio from "../RadioFilter/RadioFilter.tsx"
import { TicketsFIlter } from "../TicketsFilter/TicketsFilter.tsx"

import {
  minutesToHoursAndMinutes,
  convertDate,
  stopsCounter,
  filterNoStops,
  filterOneStop,
  filterTwoStops,
  filterThreeStops,
  fastest,
  cheapest,
  optimal,
} from "./math.tsx"
import {
  Wrapper,
  Price,
  LogoImage,
  FlightDetails,
  FlightTitle,
  FlightText,
  FlightDuration,
  MainPage,
} from "./styled.ts"

export const Tickets = ({ tickets }) => {
  const [filter, setFilter] = useState([])
  useEffect(() => {
    if (tickets) {
      setFilter(tickets)
    }
  }, [tickets])
  const handleFilterChange = (filterType) => {
    if (tickets) {
      const filtered = [...tickets]
      switch (filterType) {
        case "cheapest":
          cheapest(filtered)
          break
        case "fastest":
          fastest(filtered)
          break
        case "optimal":
          optimal(filtered)
          break
        default:
          break
      }
      setFilter(filtered)
    }
  }

  const handleRadioFilterChange = (filterRadioType) => {
    if (tickets) {
      let filtered = [...tickets]
      switch (filterRadioType) {
        case "all":
          filtered = tickets
          break
        case "none":
          filtered = filterNoStops(filtered)
          break
        case "one":
          filtered = filterOneStop(filtered)
          break
        case "two":
          filtered = filterTwoStops(filtered)
          break
        case "three":
          filtered = filterThreeStops(filtered)
          break
        default:
          break
      }
      setFilter(filtered)
    }
  }
  return (
    <MainPage>
      <FilterRadio handleRadioFilterChange={handleRadioFilterChange} />
      <TicketsFIlter onFilterChange={handleFilterChange} />
      {filter.map(({ price, carrier, segments }) => {
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
      })}
    </MainPage>
  )
}
