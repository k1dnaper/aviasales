import React, { useEffect, useState } from "react"

import Logo from "../../images/Logo.png"
import { Tickets } from "../Tickets/Tickets.tsx"
import { useTicketsContext } from "../../hooks/useTicketsContext.tsx"

import { MainPage, Center } from "./styled.ts"

const App = () => {
  const { tickets } = useTicketsContext()
  const [filter, setFilter] = useState([])
  useEffect(() => {
    if (tickets) {
      setFilter(tickets)
    }
  }, [tickets])
  return (
    <Center>
      <MainPage>
        <div>
          <img src={Logo} alt="logo" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
          <Tickets tickets={filter} />
        </div>
      </MainPage>
    </Center>
  )
}

export default App
