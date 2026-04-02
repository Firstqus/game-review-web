import useWishlist from '../hooks/useWishlist'
import GameCard from '../components/GameCard'

function WishlistPage() {
  const { wishlist, removeGame } = useWishlist()

  if (wishlist.length === 0) return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <p className="text-zinc-400 text-lg">No games in wishlist 🎮</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <h1 className="text-white text-2xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {wishlist.map(game => (
          <div key={game.id} className="relative">
            <GameCard game={game} />
            <button
              onClick={() => removeGame(game.id)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded-lg transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WishlistPage