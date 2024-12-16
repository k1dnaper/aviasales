import React, { createContext, useContext } from "react"

import { getRandomTickets } from "../components/Tickets/math.tsx"
import { TICKETRENDERONPAGE } from "../constants.js"

import { useGetTickets } from "./useGetTickets.tsx"
import { useGetAviaId } from "./useGetAviaId.tsx"

const TicketsContext = createContext()

export const useTicketsContext = () => useContext(TicketsContext)

export const TicketsProvider = ({ children }) => {
  const { id } = useGetAviaId()
  const ticketsData = useGetTickets(id)
  const tickets = getRandomTickets(ticketsData?.tickets || [], TICKETRENDERONPAGE)

  return <TicketsContext.Provider value={{ tickets }}>{children}</TicketsContext.Provider>
}
