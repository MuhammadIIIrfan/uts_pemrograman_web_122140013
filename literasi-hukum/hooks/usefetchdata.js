import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetchData(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancel = false
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        if (!cancel) setData(response.data)
      } catch (err) {
        if (!cancel) setError(err)
      } finally {
        if (!cancel) setLoading(false)
      }
    }
    fetchData()
    return () => (cancel = true)
  }, [url])

  return { data, loading, error }
}
