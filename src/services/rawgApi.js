const API_KEY = import.meta.env.VITE_RAWG_API_KEY
const BASE_URL = 'https://api.rawg.io/api'

export async function getGames(search= ''){
    const query = search ? `&search=${search}` : ''
    const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=20${query}`) // ดึงข้อมูลมาจาก server ( ยิง API)
    const data = await res.json() // แปลงค่าก่อน stream --> JSON (js object)
    return data.results
}

export async function getGameById(id) {
  const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`)
  return res.json()
}