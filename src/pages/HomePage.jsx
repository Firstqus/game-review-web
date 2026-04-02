import { useState } from 'react'
import useGames from '../hooks/useGame'
import GameCard from '../components/GameCard'

function HomePage() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const { games, loading, error } = useGames(query)

  if (error) return <p className="text-red-400 p-8">Error: {error}</p>

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && setQuery(search)}
        className="w-full bg-zinc-800 text-white placeholder-zinc-500 rounded-xl px-4 py-3 mb-8 outline-none border border-zinc-700 focus:border-zinc-400"
      />
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