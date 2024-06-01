import Elysia, { t } from "elysia";
import { Jwt } from "../services/Jwt";
import { create, destroy, index, show, update } from "../controllers/PostController";
import { Auth } from "../middleware/Auth";

export const PostRoute = new Elysia({ prefix: '/posts' })
  .use(Auth)
  .get('/', () => index())
  .get('/:id', ({ params: { id } }) => show(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })
  .post('/', ({ body }) => create(body), {
    body: t.Object({
      title: t.String(),
      body: t.String(),
      author_id: t.Numeric()
    })
  })
  .put('/:id', ({ params: { id }, body }) => update(id, body), {
    params: t.Object({
      id: t.Numeric()
    }),
    body: t.Object({
      title: t.String(),
      body: t.String(),
      author_id: t.Numeric(),
    })
  })
  .delete('/:id', ({ params: { id } }) => destroy(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })