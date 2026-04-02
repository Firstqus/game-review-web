import { useState, useEffect } from 'react'
import { getGameById } from '../services/rawgApi'

function useGameDetail(id){
    const [game, setGame] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        let cancelled = false

        async function load(){
            setLoading(true)
            try{
                const data = await getGameById(id)
                if(!cancelled) setGame(data)
            } catch(e){
                if(!cancelled) setError(e.message)
            } finally{
                if(!cancelled) setLoading(false)
            }
        }
        load()
        return () => { cancelled = true}
    }, [id])

    return {game, loading, error}

}

export default useGameDetail