import { useState,useEffect } from "react"
import { getGames } from '../services/rawgApi'

function useGames(search=''){
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        let cancelled = false
            async function load(){
                setLoading(true)
                try{
                    const data = await getGames(search)
                    if (!cancelled) setGames(data)
                } catch(e){
                    if (!cancelled) setError(e.message)
                } finally{
                    if (!cancelled) setLoading(false)
                }
            }
        load()
        return () => { cancelled = true } // เรียกเมื่อ ก่อน effect รันใหม่
    },[search])

    return {games, loading, error}
}

export default useGames