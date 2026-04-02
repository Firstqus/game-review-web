import { useState, useEffect } from 'react'
import { getGenres } from '../services/rawgApi'

function useGenres() {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    async function load() {
      const data = await getGenres()
      setGenres(data)
    }
    load()
  }, [])

  return { genres }
}

export default useGenres