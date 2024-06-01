import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Navbar from "./Navbar"

const Auth = () => {

  const { auth } = useAuth()

  const Layout = (
    <main>
      <Navbar/>
      <Outlet/>
    </main>
  )

  return (
    auth? Layout : <Navigate to={'/login'} replace />
  )
}

export default Auth