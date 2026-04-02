import { Link } from 'react-router-dom'

function GameCard({ game }) {
    return(
        <Link to={`/game/${game.id}`}>
            <img src={game.background_image} alt={game.name} width={200} />
        </Link>

    )
}

export default GameCard