import { Link } from 'react-router-dom'

function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`} className="bg-zinc-800 rounded-xl overflow-hidden hover:scale-105 transition duration-200 cursor-pointer">
      <img src={game.background_image} alt={game.name} className="w-full h-40 object-cover" />
      <div className="p-3">
        <p className="text-white font-semibold truncate">{game.name}</p>
        <p className="text-zinc-400 text-sm">⭐ {game.rating}</p>
      </div>
    </Link>
  )
}

export default GameCard