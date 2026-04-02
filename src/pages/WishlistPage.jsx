import useWishlist from '../hooks/useWishlist'
import GameCard from '../components/GameCard'

function WishlistPage() {
  const { wishlist, removeGame } = useWishlist()

  if (wishlist.length === 0) return <p>No games in wishlist</p>

  return (
    <div>
      {wishlist.map(game => (
        <div key={game.id}>
          <GameCard game={game} />
          <button onClick={() => removeGame(game.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default WishlistPage