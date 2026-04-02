import { useParams } from 'react-router-dom'
import useGameDetail from '../hooks/useGameDetail'
import useWishlist from '../hooks/useWishlist'

function GameDetailPage() {
  const { id } = useParams()
  const { game, loading, error } = useGameDetail(id)
  const { addGame, removeGame, isInWishlist } = useWishlist()

  if (loading) return <p className="text-zinc-400 p-8">Loading...</p>
  if (error) return <p className="text-red-400 p-8">Error: {error}</p>

  const saved = isInWishlist(game.id)

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <img src={game.background_image} alt={game.name} className="w-full h-100 object-cover rounded-xl mb-6" />
        <h1 className="text-3xl font-bold mb-2">{game.name}</h1>
        <div className="flex gap-4 text-zinc-400 text-sm mb-6">
          <span>⭐ {game.rating}</span>
          <span>📅 {game.released}</span>
        </div>
        <button
          onClick={() => saved ? removeGame(game.id) : addGame(game)}
          className={`px-6 py-3 rounded-xl font-semibold transition ${saved ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        >
          {saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  )
}

export default GameDetailPage