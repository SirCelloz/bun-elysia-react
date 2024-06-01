import type Elysia from "elysia"
import { Jwt } from "../services/Jwt"
import { db } from "../database/Database"

export const Auth = (app: Elysia) => 
  app
  .use(Jwt)
  .derive(async ({ jwt, set, cookie: { auth } }) => {
    const profile = await jwt.verify(auth.value)

    if (profile && 'id' in profile){
      console.log(await db.user.findUnique({ where: { id: profile.id } }))
    }

    return { profile }
  })
  .onBeforeHandle(({ set, profile }) => {
    if (!profile) {
      set.status = 401
      return {
        message: "Unauthorized",
      }
    }
  })