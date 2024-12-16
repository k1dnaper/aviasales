import React from "react"

import { StopsContainer, StopsText, StopsTextBold } from "./styled.ts"

export const minutesToHoursAndMinutes = (totalMinutes: number): string => {
  if (totalMinutes < 0) {
    throw new Error("Total minutes cannot be negative")
  }

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${hours}ч ${minutes}м`
}

export const getRandomTickets = (tickets: any[], count: number): any[] => {
  const shuffled = tickets.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const convertDate = (isoDate: string, min?: number): string => {
  const date = new Date(isoDate)
  if (min) {
    const newTime = date.getTime() + min * 60 * 1000
    const newDate = new Date(newTime)
    const hours = newDate.getHours()
    const minutes = newDate.getMinutes()
    return `${hours}:${minutes}`
  } else {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${hours}:${minutes}`
  }
}

export const stopsCounter = (stops: string[]): JSX.Element => {
  if (stops.length === 0) {
    return (
      <StopsContainer>
        <StopsText>ПЕРЕСАДОК </StopsText>
        <StopsTextBold>НЕТ</StopsTextBold>
      </StopsContainer>
    )
  }
  if (stops.length === 1) {
    return (
      <StopsContainer>
        <StopsText>1 ПЕРЕСАДКА</StopsText>
        <StopsTextBold>{stops.join("")}</StopsTextBold>
      </StopsContainer>
    )
  } else {
    return (
      <StopsContainer>
        <StopsText>{stops.length} ПЕРЕСАДКИ</StopsText>
        <StopsTextBold>{stops.join(", ")}</StopsTextBold>
      </StopsContainer>
    )
  }
}
