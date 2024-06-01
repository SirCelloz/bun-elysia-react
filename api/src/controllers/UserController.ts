import { NotFoundError } from "elysia"
import { db } from "../database/Database"
import Hash from "../services/Hash"

const hash = new Hash()

export const index = async () => {
  try {
    const result = await db.user.findMany()
    return result
  } catch (e: unknown) {
    console.log(`index func ${e}`)
  }
}

export const show = async (id: number) => {
  try {
    const result = await db.user.findUnique({ where: { id: id } })

    if (!result) return new NotFoundError('user that you looking for is not exist')

    return result
  } catch (e: unknown) {
    console.log(`show func ${e}`)
  }
}

export const update = async (id: number, opt: { name: string, password: string }) => {
  try {
    const { name, password } = opt
    const result = await db.user.update({
      where: { id: id },
      data: {
        ...(name ? { name: name } : {  }),
      ...(password ? { password: password } : {  })
      }
    })
    return result
  } catch (e: unknown) {
    console.log(`update func ${e}`)
  }
}

export const create = async (opt: { name: string, password: string }) => {
  try {
    const { name, password } = opt
    const existingName = await db.user.findUnique({ where: { name: name } })

    if (existingName) return `sorry user with name ${name} already exist`

    const create = await db.user.create({
      data: {
        name: name,
        password: await hash.hash(password)
      }
    })

    return create
  } catch (e: unknown) {

  }
}

export const destroy = async (id: number) => {
  try {
    const result = await db.user.delete({ where: { id: id } })
    return result
  } catch (e: unknown) {
    console.log(`destroy func ${e}`)
  }
}