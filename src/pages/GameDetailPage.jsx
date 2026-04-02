import { useParams } from "react-router-dom"
import useGameDetail from "../hooks/useGameDetail"

function GameDetailPage() {
  const { id } = useParams()
  const {game , loading, error} = useGameDetail(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (  
    <div>
      <img src={game.background_image} alt={game.name} width={400} />
      <h1>{game.name}</h1>
      <p>Rating: {game.rating}</p>
      <p>Released: {game.released}</p>
    </div>
  )
}
export default GameDetailPage