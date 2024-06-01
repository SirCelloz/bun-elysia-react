import jwt from "@elysiajs/jwt";
import Elysia, { t } from "elysia";

export const Jwt = new Elysia()
  .use(jwt({
    name: 'jwt',
    secret: 'Fischl von Luftschloss Narfidort',
    exp: '1h',
    schema: t.Object({
      name: t.String(),
      id: t.Numeric()
    })
  }))