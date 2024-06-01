import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="font-noto-sans-jp font-bold">
        <h1 className="text-4xl">oopppsss the page you looking for is not exist....</h1>
        <p className="mt-2 text-xl">404 x_x</p>
        <Link to={'/dashboard'} replace className="btn btn-wide mt-10">how about we go back where you belong ?</Link>
      </div>
    </div>
  )
}

export default Error
