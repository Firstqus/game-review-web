import { useState } from 'react'
import useGames from '../hooks/useGame'
import useGenres from '../hooks/useGenres'
import GameCard from '../components/GameCard'

function HomePage() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('')
  const { games, loading, error } = useGames(query, genre)
  const { genres } = useGenres()

  if (error) return <p className="text-red-400 p-8">Error: {error}</p>

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && setQuery(search)}
          className="flex-1 bg-zinc-800 text-white placeholder-zinc-500 rounded-xl px-4 py-3 outline-none border border-zinc-700 focus:border-zinc-400"
        />
        <select
          value={genre}
          onChange={e => setGenre(e.target.value)}
          className="bg-zinc-800 text-white rounded-xl px-4 py-3 outline-none border border-zinc-700"
        >
          <option value="">All Genres</option>
          {genres.map(g => (
            <option key={g.id} value={g.slug}>{g.name}</option>
          ))}
        </select>
      </div>
      {loading ? (
        <p className="text-zinc-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage