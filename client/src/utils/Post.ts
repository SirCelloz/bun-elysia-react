import { cn } from "../services/Axios"

export const getAllPost = async () => {
  try {
    const result = await cn.get('/posts')

    return result.data
  } catch (e: unknown) {
    console.log(`get all post ${e}`)
  }
}

export const getPostById = async (id: number) => {
  try {
    const result = await cn.get(`/posts/${id}`)
    console.log(result)
    return result.data
  } catch (e: unknown) {
    console.log(`get post by id ${e}`)
  }
}