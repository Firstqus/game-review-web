import useGames from "../hooks/useGame"
import GameCard from "../components/GameCard"

function HomePage(){
    const {games, loading, error} = useGames()
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    return(
        <div>
            {games.map(game => (
                <GameCard key={game.id} game={game}/>
            ))}
        </div>
    )
}

export default HomePage