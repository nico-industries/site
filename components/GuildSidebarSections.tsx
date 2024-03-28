"use client"

import { useCurrentGuild } from "@/app/contexts/CurrentGuildContext"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Link from "next/link"

type SidebarElement = {
  name: string
  href: string
}

const SidebarElements: SidebarElement[] = [
  { name: "General Settings", href: "" },
  { name: "Server Info", href: "server-info" },
  { name: "Join / Leave Announcements", href: "welcome" },
  { name: "Moderation", href: "moderation" },
]

function SidebarElement({ category }: { category: SidebarElement }) {
  const { guild } = useCurrentGuild()

  return (
    <Button
      asChild
      variant="ghost"
      className="px-2 py-1 text-left overflow-hidden select-none justify-start"
    >
      <Link href={`/dashboard/${guild.id}/${category.href}`}>
        {category.name}
      </Link>
    </Button>
  )
}

export default function GuildSidebarSections() {
  const { guild } = useCurrentGuild()

  return (
    <aside className="flex flex-col mx-4">
      <span className="mx-1 mt-2 text-center font-bold">{guild.name}</span>
      <Separator className="my-2 bg-black dark:bg-white" />
      {SidebarElements.map((category, i) => (
        <SidebarElement key={i} category={category} />
      ))}
    </aside>
  )
}
