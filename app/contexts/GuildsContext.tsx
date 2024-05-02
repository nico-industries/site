"use client"

import { createContext, useContext } from "react"
import { RESTAPIPartialCurrentUserGuild } from "discord-api-types/v10"

interface Guilds {
  mutualGuilds: RESTAPIPartialCurrentUserGuild[]
  inviteGuilds: RESTAPIPartialCurrentUserGuild[]
}

const Context = createContext<Guilds | null>(null)

export default async function GuildsContext({
  mutualGuilds,
  inviteGuilds,
  children,
}: Guilds & {
  children: React.ReactNode
}) {
  return (
    <Context.Provider value={{ mutualGuilds, inviteGuilds }}>
      {children}
    </Context.Provider>
  )
}

export function useGuilds(): Guilds {
  const guilds = useContext(Context)
  if (!guilds?.mutualGuilds || !guilds.inviteGuilds) {
    throw new Error("No GuildContext.Provider found when calling useGuilds")
  }
  return guilds
}
