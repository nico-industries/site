import { getGuilds, getSession } from "@/lib/utils"
import GuildsContext from "../contexts/GuildsContext"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  const userGuilds = await getGuilds(`Bearer ${session.user.accessToken}`)
  const botGuilds = await getGuilds(`Bot ${process.env.TOKEN}`)

  // Guilds where the user has admin permissions
  const adminUserGuilds = userGuilds.filter(
    ({ permissions }) => (parseInt(permissions) & 0x20) === 0x20
  )

  // Guilds where the user has admin permissions and the bot is in
  const mutualGuilds = adminUserGuilds.filter((guild) =>
    botGuilds.some((botGuild) => botGuild.id === guild.id)
  )

  // Guilds where the user has admin permissions and the bot is not in
  const adminUserGuildsFiltered = adminUserGuilds.filter(
    (guild) => !mutualGuilds.some((mutualGuild) => mutualGuild.id === guild.id)
  )

  return (
    <GuildsContext
      mutualGuilds={mutualGuilds}
      inviteGuilds={adminUserGuildsFiltered}
    >
      {children}
    </GuildsContext>
  )
}
