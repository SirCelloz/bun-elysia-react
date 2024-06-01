import { PrismaClient } from "@prisma/client"

export const db = new PrismaClient()

const main = async () => {

}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })