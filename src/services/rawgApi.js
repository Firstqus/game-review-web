const API_KEY = import.meta.env.VITE_RAWG_API_KEY
const BASE_URL = 'https://api.rawg.io/api'

export async function getGames(search = '', genre = '') {
  const searchQuery = search ? `&search=${search}` : ''
  const genreQuery = genre ? `&genres=${genre}` : ''
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=20${searchQuery}${genreQuery}`)
  const data = await res.json()
  return data.results
}

export async function getGameById(id) {
  const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`)
  return res.json()
}

export async function getGenres() {
  const res = await fetch(`${BASE_URL}/genres?key=${API_KEY}`)
  const data = await res.json()
  return data.results
}