import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function ensureGuildExists(guildId: string) {
  const guild = await prisma.guild.upsert({
    where: { id: guildId },
    update: {},
    create: { id: guildId },
  })

  return guild
}

export default prisma
