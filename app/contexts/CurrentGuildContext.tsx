"use client"

import { createContext, useContext } from "react"
import { APIGuild, APIChannel } from "discord-api-types/v10"

interface CurrentGuild {
  guild: APIGuild
  channels: APIChannel[]
}

const Context = createContext<CurrentGuild | null>(null)

export default function CurrentGuildContext({
  guild,
  channels,
  children,
}: CurrentGuild & {
  children: React.ReactNode
}) {
  return (
    <Context.Provider value={{ guild, channels }}>{children}</Context.Provider>
  )
}

export function useCurrentGuild(): CurrentGuild {
  const currentGuild = useContext(Context)
  if (!currentGuild?.guild || !currentGuild.channels) {
    throw new Error(
      "No CurrentGuildContext.Provider found when calling useGuild"
    )
  }
  return currentGuild
}
