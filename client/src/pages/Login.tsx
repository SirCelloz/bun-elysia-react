import { ChangeEvent, FormEvent, useState } from "react"
import { Lock, Person } from "../assets/Svg"
import { nc } from "../services/Axios"
import cookie from 'js-cookie'

const Login = () => {

  const [ data, setData ] = useState({
    name: '',
    password: ''
  })
  const [ message, setMessage ] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await nc.post('/auth/login', data)
      cookie.set('auth', res.data)
      setMessage('Success')
      window.location.reload() 
    } catch (e: unknown) {
      console.log(e)
      setMessage('Error')
    }
  }

  return (
    <main className="flex justify-center h-screen items-center">
      <div className="card w-96 bg-zinc-800">
        <div className="card-body">
          <div className="card-title justify-center my-4">
            <h1 className="font-bold font-noto-sans-jp text-2xl">Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="input input-bordered flex items-center gap-2 bg-transparent">
                { Person }
                <input type="text" placeholder="Username" className="grow" name="name" value={data.name} onChange={handleChange} />
              </div>
              <div className="input input-bordered flex items-center gap-2 bg-transparent">
                { Lock }
                <input type="text" placeholder="Password" className="grow" name="password" value={data.password} onChange={handleChange} />
              </div>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-wide btn-neutral" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
      {message}
    </main>
  )
}

export default Login