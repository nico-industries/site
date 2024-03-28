"use client"

import { RESTAPIPartialCurrentUserGuild } from "discord-api-types/v10"
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
import { cn } from "@/lib/utils"
import { useGuilds } from "@/app/contexts/GuildsContext"
import IconButton from "./IconButton"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"
import { useCurrentGuild } from "@/app/contexts/CurrentGuildContext"
import { ScrollArea } from "./ui/scroll-area"

export function GuildButton({
  guild,
  href,
  size = "lg",
  tooltipDirection = "bottom",
}: {
  guild: RESTAPIPartialCurrentUserGuild
  href: string
  size?: "sm" | "lg"
  tooltipDirection?: "top" | "bottom" | "left" | "right"
}) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="group cursor-pointer bg-secondary m-2 rounded-full hover:rounded-lg">
          <Link href={href}>
            {guild.icon ? (
              <Avatar
                className={cn(
                  "group-hover:rounded-lg",
                  size === "sm" && "w-12 h-12",
                  size === "lg" && "w-24 h-24"
                )}
              >
                <AvatarImage
                  src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                  alt={guild.name}
                />
              </Avatar>
            ) : (
              <div
                className={cn(
                  "flex items-center justify-center group-hover:rounded-lg",
                  size === "sm" && "w-12 h-12 text-sm",
                  size === "lg" && "w-24 h-24 text-2xl"
                )}
              >
                <span>
                  {guild.name
                    .replace(/'s /g, " ")
                    .replace(/\w+/g, (e) => e[0])
                    .replace(/\s/g, "")
                    .slice(0, size === "lg" ? 7 : 5)}
                </span>
              </div>
            )}
          </Link>
        </TooltipTrigger>
        <TooltipContent side={tooltipDirection}>
          <Label>{guild.name}</Label>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function ServerButtonSkeleton() {
  return <Skeleton className="w-24 h-24 m-2 rounded-full" />
}

export function ChooseGuildList({
  guilds,
  redirectToDashboard,
}: {
  guilds: RESTAPIPartialCurrentUserGuild[]
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
          <GuildButton
            key={guild.id}
            guild={guild}
            href={
              redirectToDashboard
                ? `/dashboard/${guild.id}`
                : `https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&scope=applications.commands+bot&permissions=8&guild_id=${guild.id}&disable_guild_select=true&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_URL}/api/auth/server-auth`
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

function AddToGuildButton({
  guilds,
}: {
  guilds: RESTAPIPartialCurrentUserGuild[]
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton
          className="m-2 w-12 h-12 rounded-full hover:rounded-lg"
          icon={<Plus color="#23a559" />}
          variant="secondary"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite bot to server</DialogTitle>
          <DialogDescription>
            Choose server you want to invite bot to:
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72 flex flex-col">
          {guilds.map((guild) => {
            return (
              <div key={guild.id} className="flex">
                <GuildButton
                  guild={guild}
                  href={`https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&scope=applications.commands+bot&permissions=8&guild_id=${guild.id}&disable_guild_select=true&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_URL}/api/auth/server-auth`}
                />
                <Label className="my-auto">{guild.name}</Label>
              </div>
            )
          })}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export function SidebarGuildList() {
  const { mutualGuilds, inviteGuilds } = useGuilds()
  const { guild: currentGuild } = useCurrentGuild()

  return (
    <nav className="flex flex-col items-center justify-center">
      {mutualGuilds.map((guild) => {
        return (
          <div key={guild.id}>
            {guild.id === currentGuild.id && (
              <span className="absolute left-0 h-12 w-1 my-2 rounded-r-full bg-black dark:bg-white overflow-hidden" />
            )}
            <GuildButton
              guild={guild}
              href={`/dashboard/${guild.id}`}
              size="sm"
              tooltipDirection="right"
            />
          </div>
        )
      })}
      <AddToGuildButton guilds={inviteGuilds} />
    </nav>
  )
}
