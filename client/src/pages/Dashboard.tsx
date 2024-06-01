import { Link } from "react-router-dom"
import { Card, CardAction, CardTitle } from "../components/Card"
import { useEffect, useState } from "react"
import { getPostById } from "../utils/Post"
import { useAuth } from "../hooks/useAuth"

interface Post {
  id: number
  title: string
  body: string
  author_id: number
}

const Dashboard = () => {

  const { auth } = useAuth()
  const [ posts, setPosts ] = useState<any>()

  useEffect(() => {
    const fetchPost = async () => {
      if (auth?.id){
        const data = await getPostById(auth.id)
        setPosts(data)
      }
    }

    fetchPost()
  }, [auth])

  return (
    <div className="m-12">
      <h1 className="text-5xl font-bold font-noto-sans-jp">Welcome back {auth?.name} !!!</h1>
      <p className="text-xl font-bold font-noto-sans-jp">so far youve made 30 post...</p>
      <section className="my-10">
        <div className="grid gap-6 place-items-center grid-cols-2">
          { posts?.map((post: Post) => (
            <Card key={post.id} className="w-[500px]">
            <CardTitle className="flex flex-col">
              <div className="flex flex-col font-noto-sans-jp">
                <h1 className="font-bold text-violet-500">
                  { post.title }
                </h1>
                <p className="text-sm font-bold mt-1.5">
                  { post.body.substring(0, 100) + '...' }
                </p>
              </div>
            </CardTitle>
            <CardAction className="flex-col">
              <div className="flex gap-2 my-1">
                <div className="badge badge-secondary">{ auth?.name }</div>
              </div>
              <div className="mt-2">
                <Link to={'/post'} className="btn bg-zinc-800 hover:bg-zinc-700" >See more</Link>
              </div>
            </CardAction>
          </Card>
          )) }
        </div>
      </section>
    </div>
  )
}

export default Dashboard
