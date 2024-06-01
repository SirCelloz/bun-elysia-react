import { db } from "../database/Database"
import Hash from "../services/Hash"

const hash = new Hash()

export const login = async (jwt: any, auth: any, opt: { name: string, password: string }) => {
  try {
    const { name, password } = opt
    const existingUser = await db.user.findUnique({ where: { name: name } })

    if (!existingUser) return `theres no user with name ${name}`
    const validPassword = await hash.compare(password, existingUser.password)

    if(!validPassword) return `ooppss something went wrong`

    auth.set({
      value: await jwt.sign({ name: name, id: existingUser.id }),
      httpOnly: true,
      maxAge: 7 * 86400,
      path: '/'
    })

    return auth.value
  } catch (e: unknown) {
    console.log(`login func ${e}`)
  }
}