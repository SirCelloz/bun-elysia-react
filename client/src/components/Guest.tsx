import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const Guest = () => {
  
  const { auth } = useAuth()

  return (
    auth? <Navigate to={'/dashboard'} replace/> : <Outlet/>
  )
}

export default Guest
