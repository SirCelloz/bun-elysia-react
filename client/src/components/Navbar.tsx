import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-transparent bg-zinc-900 p-2">
      <nav className="navbar">
        <div className="navbar-start gap-4">
          <Link to='/dashboard' className="btn bg-zinc-800 px-10 hover:bg-zinc-700">Dashboard</Link>
          <Link to='/posts' className="btn bg-zinc-800 px-10 hover:bg-zinc-700">Posts</Link>
          <Link to='/categories' className="btn bg-zinc-800 px-10 hover:bg-zinc-700">Categories</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
