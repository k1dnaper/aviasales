import React from "react"

import { WrapperFilter, Button } from "../TicketsFilter/styled.ts"

export const TicketsFIlter = ({ onFilterChange }) => {
  return (
    <WrapperFilter>
      <Button onClick={() => onFilterChange("cheapest")}>САМЫЙ ДЕШЕВЫЙ</Button>
      <Button onClick={() => onFilterChange("fastest")}>САМЫЙ БЫСТРЫЙ</Button>
      <Button onClick={() => onFilterChange("optimal")}>ОПТИМАЛЬНЫЙ</Button>
    </WrapperFilter>
  )
}
