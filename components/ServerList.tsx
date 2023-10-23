"use client"

import { PartialGuild } from "@/app/types"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Label } from "./ui/label"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import { Skeleton } from "./ui/skeleton"

function getGuildIcon(guild: PartialGuild) {
  if (guild.icon) {
    return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
  }
  return "https://cdn.discordapp.com/embed/avatars/0.png"
}

function ServerButton({ guild, href }: { guild: PartialGuild; href: string }) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="group cursor-pointer bg-gray-200 dark:bg-gray-800 m-2 rounded-full hover:rounded-lg">
          <Avatar className="w-24 h-24 group-hover:rounded-lg">
            <Link href={href}>
              <AvatarImage src={getGuildIcon(guild)} alt={guild.name} />
            </Link>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <Label>{guild.name}</Label>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function ServerButtonSkeleton() {
  return <Skeleton className="w-24 h-24 m-2 rounded-full" />
}

export default function ServerList({
  guilds,
  redirectToDashboard,
}: {
  guilds: PartialGuild[]
  redirectToDashboard?: boolean
}) {
  if (!guilds.length) {
    return (
      <div className="flex gap-2 items-center justify-center m-12">
        <Label className="grow text-center font-bold text-3xl text-red-400">
          No servers to list
        </Label>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center m-12">
      {guilds.map((guild) => {
        return (
          <ServerButton
            key={guild.id}
            guild={guild}
            href={
              redirectToDashboard
                ? `/dashboard/${guild.id}`
                : `https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&scope=applications.commands+bot&permissions=8&guild_id=${guild.id}&disable_guild_select=true&response_type=code&redirect_uri=http://localhost:3000/api/auth/server-auth`
            }
          />
        )
      })}
    </div>
  )
}

export function ServerListSkeleton() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center m-12">
      {Array.from({ length: 7 }).map((_, i) => (
        <ServerButtonSkeleton key={i} />
      ))}
    </div>
  )
}
