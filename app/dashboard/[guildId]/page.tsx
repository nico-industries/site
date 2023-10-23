import { getServerSession } from "next-auth"
import authOptions from "@/app/api/auth/options"
import { notFound } from "next/navigation"
import { getGuilds } from "@/lib/utils"

export default async function Dashboard({
  params,
}: {
  params: { guildId: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session?.user.accessToken) {
    notFound()
  }

  const guilds = await getGuilds(`Bearer ${session.user.accessToken}`)

  const guild = guilds.find((guild) => guild.id === params.guildId)
  if (!guild) {
    notFound()
  }

  return (
    <div>
      <h1>{JSON.stringify(guild)}</h1>
    </div>
  )
}
