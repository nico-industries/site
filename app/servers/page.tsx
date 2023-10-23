import { getServerSession } from "next-auth"
import { getGuilds } from "@/lib/utils"
import authOptions from "../api/auth/options"
import ServerList from "@/components/ServerList"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Choose server to manage",
}

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session?.user.accessToken) {
    notFound()
  }

  const userGuilds = await getGuilds(`Bearer ${session.user.accessToken}`)
  const botGuilds = await getGuilds(`Bot ${process.env.DISCORD_BOT_TOKEN}`)

  const adminUserGuilds = userGuilds.filter(
    ({ permissions }) => (parseInt(permissions) & 0x20) === 0x20
  )

  const mutualGuilds = adminUserGuilds.filter((guild) =>
    botGuilds.some((botGuild) => botGuild.id === guild.id)
  )

  const adminUserGuildsFiltered = adminUserGuilds.filter(
    (guild) => !mutualGuilds.some((mutualGuild) => mutualGuild.id === guild.id)
  )

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-4xl font-bold text-center">
        Choose server to manage:
      </h1>
      <ServerList guilds={mutualGuilds} redirectToDashboard />
      <h1 className="text-4xl font-bold text-center">Invite bot to server:</h1>
      <ServerList guilds={adminUserGuildsFiltered} />
    </div>
  )
}
