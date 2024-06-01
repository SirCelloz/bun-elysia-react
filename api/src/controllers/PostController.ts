import { NotFoundError } from "elysia"
import { db } from "../database/Database"

export const index = async () => {
  try {
    const result = await db.post.findMany()

    return result
  } catch (e: unknown) {
    console.log(`index func ${e}`)
  }
}

export const show = async (id: number) => {
  try {
    const result = await db.post.findMany({ where: { author_id: id } })

    if (!result) return new NotFoundError('the post you looking for is not exist')

    return result
  } catch (e: unknown) {
    console.log(`show func ${e}`)
  }
}

export const create = async (opt: { title: string, body: string, author_id: number }) => {
  try {
    const { title, body, author_id } = opt
    const create = await db.post.create({
      data: {
        title: title,
        body: body,
        author_id: author_id
      }
    })

    return create
  } catch (e: unknown) {
    console.log(`create func ${e}`)
  }
}

export const update = async (id: number ,opt: { title: string, body: string }) => {
  try {
    const { title, body } = opt

    const update = await db.post.update({
      where: { id: id },
      data: {
        ...(title ? { title: title } : {  }),
        ...(body ? { body: body } : {  })
      }
    })
  } catch (e: unknown) {
    console.log(`update func ${e}`)
  }
}

export const destroy = async (id: number) => {
  try {
    const destroy = await db.post.delete({ where: { id: id } })
  } catch (e: unknown) {
    console.log(`destroy func ${e}`)
  }
} 