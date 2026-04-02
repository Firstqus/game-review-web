import { useState } from "react"

function useWishlist(){
    const [wishlist, setWishlist] = useState(() =>{
        const saved = localStorage.getItem('wishlist')
        return saved ? JSON.parse(saved) : []
    })

    function addGame(game) {
        const updated = [...wishlist, game]
        setWishlist(updated)
        localStorage.setItem('wishlist', JSON.stringify(updated))
    }

    function removeGame(id) {
        const updated = wishlist.filter(g => g.id !== id) // เอาแค่ที่ id ไม่ตรง ถ้า Id ตรง เอาออก filter
        setWishlist(updated)
        localStorage.setItem('wishlist', JSON.stringify(updated))
    }

    function isInWishlist(id) {
        return wishlist.some(g => g.id === id)
    }

    return {wishlist, addGame, removeGame, isInWishlist}

}

export default useWishlist

