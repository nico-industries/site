import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { type PartialGuild } from "@/app/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getGuilds(
  authorization: string
): Promise<PartialGuild[]> {
  const res = await fetch("https://discord.com/api/users/@me/guilds", {
    headers: {
      authorization,
    },
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch guilds (Code: ${res.status})`)
  }
  return await res.json()
}
