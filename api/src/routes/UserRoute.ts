import Elysia, { t } from "elysia";
import { Auth } from "../middleware/Auth";
import { create, destroy, index, show, update } from "../controllers/UserController";
import { db } from "../database/Database";

type Controller = {
}

export const UserRoute = new Elysia({ prefix: '/user' })
  .use(Auth)
  .get('/tes', ({ profile }) => { return profile })
  .get('/', () => index())
  .get('/:id', ({ params: { id } }) => show(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })
  .post('/', ({ body }) => create(body), {
    body: t.Object({
      name: t.String(),
      password: t.String()
    })
  })
  .put('/:id', ({ params: { id }, body }) => update(id, body), {
    params: t.Object({
      id: t.Numeric()
    }),
    body: t.Object({
      name: t.String(),
      password: t.String()
    })
  })
  .delete('/:id', ({ params: { id } }) => destroy(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })
  .get('/me', async ({ profile }) => {

    if (profile && 'id' in profile){
      const user = await db.user.findUnique({ where: { id: profile.id } })
      return user
    }

  })