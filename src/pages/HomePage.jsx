import useGames from "../hooks/useGame"

function HomePage(){
    const {games, loading, error} = useGames()
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    return(
        <div>
            {games.map(game => (
                <p key={game.id}>
                    {game.name}
                </p>
            ))}
        </div>
    )
}

export default HomePage