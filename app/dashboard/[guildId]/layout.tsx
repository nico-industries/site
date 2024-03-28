import { notFound } from "next/navigation"
import CurrentGuildContext from "@/app/contexts/CurrentGuildContext"
import { SidebarGuildList } from "@/components/GuildList"
import { Separator } from "@/components/ui/separator"
import GuildSidebarSections from "@/components/GuildSidebarSections"

export default async function ServerLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { guildId: string }
}) {
  const guildRes = await fetch(
    `https://discord.com/api/guilds/${params.guildId}`,
    { headers: { authorization: `Bot ${process.env.TOKEN}` } }
  )
  if (!guildRes.ok) {
    notFound()
  }
  const guild = await guildRes.json()

  const channelsRes = await fetch(
    `https://discord.com/api/guilds/${params.guildId}/channels`,
    { headers: { authorization: `Bot ${process.env.TOKEN}` } }
  )
  if (!channelsRes.ok) {
    notFound()
  }
  const channels = await channelsRes.json()

  return (
    <CurrentGuildContext guild={guild} channels={channels}>
      <div className="flex items-start h-[calc(100vh-65px)]">
        <SidebarGuildList />
        <Separator orientation="vertical" />
        <GuildSidebarSections />
        <Separator orientation="vertical" />
        <main>{children}</main>
      </div>
    </CurrentGuildContext>
  )
}
