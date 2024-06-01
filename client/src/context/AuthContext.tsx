import { createContext, useEffect, useState, Dispatch, ReactNode, SetStateAction } from "react"
import { cn } from "../services/Axios"

interface AuthContextType {
  auth: { id: number, name: string, password: string } | null
  setAuth: Dispatch<SetStateAction<{ id: number, name: string, password: string } | null>>
}

const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {}
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [ auth, setAuth ] = useState<{ id: number, name: string, password: string } | null>(null)
  const [ loading, setLoading ] = useState<boolean>(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await cn.get('/user/me')

        setAuth(res.data)
        setLoading(false)          

      } catch (error) {
        console.error("Error fetching profile:", error)
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading){
    return (
      <div className="flex items-center justify-center h-screen font-bold font-noto-sans-jp text-5xl">
        Loading . . . . . . . 
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
