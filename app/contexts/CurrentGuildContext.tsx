"use client"

import { createContext, useContext } from "react"
import { PartialGuild } from "../types"

const Context = createContext<PartialGuild | null>(null)

export default function CurrentGuildContext({
  guild,
  children,
}: {
  guild: PartialGuild
  children: React.ReactNode
}) {
  return <Context.Provider value={guild}>{children}</Context.Provider>
}

export function useCurrentGuild(): PartialGuild {
  const guild = useContext(Context)
  if (!guild) {
    throw new Error("No GuildContext.Provider found when calling useGuild")
  }
  return guild
}
