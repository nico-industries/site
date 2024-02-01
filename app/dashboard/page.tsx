"use client"

import { ChooseGuildList } from "@/components/GuildList"
import { useGuilds } from "../contexts/GuildsContext"

export default async function Dashboard() {
  const { mutualGuilds, inviteGuilds } = useGuilds()

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-4xl font-bold text-center">
        Choose server to manage:
      </h1>
      <ChooseGuildList guilds={mutualGuilds} redirectToDashboard />
      <h1 className="text-4xl font-bold text-center">Invite bot to server:</h1>
      <ChooseGuildList guilds={inviteGuilds} />
    </div>
  )
}
