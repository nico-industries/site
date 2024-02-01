"use client"

import { useCurrentGuild } from "@/app/contexts/CurrentGuildContext"

export default async function Dashboard() {
  const guild = useCurrentGuild()
  return <h1>{JSON.stringify(guild)}</h1>
}
