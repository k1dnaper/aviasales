import { useEffect, useState, useCallback } from "react"
import axios from "axios"

type TTicketData = {
  stop: boolean
  tickets: []
} | null

export const useGetTickets = (id: string): TTicketData => {
  const [ticketsData, setTicketsData] = useState<TTicketData>(null)
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)

      setTicketsData(data)
    } catch (error) {
      console.error(error)
    }
  }, [id, setTicketsData])
  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [id, fetchData])
  return ticketsData
}
