"use client"

import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Label } from "./ui/label"
import { Avatar, AvatarImage } from "./ui/avatar"
import { BiSolidDownArrow } from "react-icons/bi"
import { Server, LogOut } from "lucide-react"
import Link from "next/link"
import SignInButton from "./SignInButton"

export default function Dropdown() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <div className="m-auto">
        <SignInButton />
      </div>
    )
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-2 my-auto">
          <Label className="hidden sm:block m-auto">{session.user?.name}</Label>
          <Avatar>
            <AvatarImage
              src={
                session.user?.image ||
                "https://cdn.discordapp.com/embed/avatars/4.png"
              }
              alt="Avatar"
              className="p-[2px] rounded-full"
            />
          </Avatar>
          <BiSolidDownArrow />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/dashboard">
            <DropdownMenuItem className="flex gap-2">
              <Server />
              <Label>Servers</Label>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem
            className="flex gap-2"
            onClick={() => {
              signOut({ callbackUrl: "/" })
            }}
          >
            <LogOut />
            <Label>Sign Out</Label>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
