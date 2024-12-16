import React, { useEffect, useState } from "react"

import Logo from ".././../images/Logo.png"
import { Tickets } from "../Tickets/Tickets.tsx"
import { TicketsFIlter } from "../TicketsFilter/TicketsFilter.tsx"
import { useTicketsContext } from "../../hooks/useTicketsContext.tsx"
import FilterRadio from "../RadioFilter/RadioFilter.tsx"

import { fastest, cheapest, optimal } from "./math.js"
import { MainPage } from "./styled.ts"

const App = () => {
  const { tickets } = useTicketsContext()
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
  return (
    <MainPage>
      <FilterRadio />
      <div>
        <img src={Logo} alt="logo" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
        <TicketsFIlter onFilterChange={handleFilterChange} />
        <Tickets tickets={filter} />
      </div>
    </MainPage>
  )
}

export default App
