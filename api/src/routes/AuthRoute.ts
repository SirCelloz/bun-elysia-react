import Elysia, { t } from "elysia"
import { Jwt } from "../services/Jwt"
import { login } from "../controllers/AuthController"

export const AuthRoute = new Elysia({ prefix: '/auth' })
  .use(Jwt)
  .post('/login', ({ jwt, cookie: { auth }, body }) => login(jwt, auth, body), {
    body: t.Object({
      name: t.String(),
      password: t.String()
    })
  })