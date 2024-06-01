import { Elysia } from "elysia"
import { AuthRoute, UserRoute, PostRoute } from "./route"
import cors from "@elysiajs/cors"

const app = new Elysia()
  .use(cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    origin: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE']
  }))
  .group('/api', (app) => app
    .use(UserRoute)
    .use(AuthRoute)
    .use(PostRoute)
  )
  .listen(3001)

console.log(`bun is running at port ${app.server?.port}`)
