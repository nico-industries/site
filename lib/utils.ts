import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { RESTAPIPartialCurrentUserGuild } from "discord-api-types/v10"
import { type Session } from "next-auth"
import { getServerSession } from "next-auth"
import authOptions from "@/app/api/auth/options"
import { notFound } from "next/navigation"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getGuilds(
  authorization: string
): Promise<RESTAPIPartialCurrentUserGuild[]> {
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

export async function getSession(): Promise<Session> {
  const session = await getServerSession(authOptions)

  if (!session?.user.accessToken) {
    notFound()
  }

  return session
}
