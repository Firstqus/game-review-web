import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-zinc-900 px-8 py-4 flex items-center justify-between border-b border-zinc-700">
      <Link to="/" className="text-white text-xl font-bold tracking-wide">🎮 GameVault</Link>
      <div className="flex gap-6">
        <Link to="/" className="text-zinc-400 hover:text-white transition">Browse</Link>
        <Link to="/wishlist" className="text-zinc-400 hover:text-white transition">Wishlist</Link>
      </div>
    </nav>
  )
}

export default Navbar