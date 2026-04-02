import { useParams } from "react-router-dom"
import useGameDetail from "../hooks/useGameDetail"
import useWishlist from "../hooks/useWishlist"

function GameDetailPage() {
  const { id } = useParams()
  const {game , loading, error} = useGameDetail(id)
  const { addGame, removeGame, isInWishlist } = useWishlist()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const saved = isInWishlist(game.id)

  return (  
    <div>
      <img src={game.background_image} alt={game.name} width={400} />
      <h1>{game.name}</h1>
      <p>Rating: {game.rating}</p>
      <p>Released: {game.released}</p>
      <button onClick={() => saved ? removeGame(game.id) : addGame(game)}>
        {saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  )
}
export default GameDetailPage