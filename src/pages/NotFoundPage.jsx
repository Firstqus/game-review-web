import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-zinc-400 mb-8">Page not found</p>
      <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl transition">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage