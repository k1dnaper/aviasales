import { useEffect, useState, useCallback } from "react"
import axios from "axios"

type TSearchId = {
  id: string
}

export const useGetAviaId = (): TSearchId => {
  const [id, setId] = useState<TSearchId["id"]>("")

  const fetchData = useCallback(async () => {
    try {
      const {
        data: { searchId },
      } = await axios.get("https://aviasales-test-api.kata.academy/search")
      setId(searchId)
    } catch (error) {
      console.log(error)
    }
  }, [setId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { id }
}
