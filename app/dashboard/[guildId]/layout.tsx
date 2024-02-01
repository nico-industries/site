"use client"

import { notFound } from "next/navigation"
import { useGuilds } from "@/app/contexts/GuildsContext"
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
  const { mutualGuilds } = useGuilds()
  console.log(params.guildId)
  const guild = mutualGuilds.find((guild) => guild.id === params.guildId)
  if (!guild) {
    notFound()
  }

  return (
    <CurrentGuildContext guild={guild}>
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
