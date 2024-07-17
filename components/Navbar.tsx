"use client"

import { Separator } from "@/components/ui/separator"
import { BsDiscord } from "react-icons/bs"
import { FaUserPlus } from "react-icons/fa"
import Dropdown from "./Dropdown"
import IconButton from "./IconButton"
import Logo from "./Logo"
import ToggleTheme from "./ToggleTheme"

export default function Navbar() {
  return (
    <div className="sticky -top-1 z-50 flex flex-col backdrop-blur-3xl backdrop-filter">
      <header className="sticky top-2 flex justify-between p-2 px-3">
        <div className="flex justify-start gap-6">
          <Logo />
          <div className="hidden justify-start gap-3 sm:flex">
            <IconButton
              text="Discord"
              href="https://discord.gg/hYwSBu7jnN"
              icon={<BsDiscord />}
              variant="secondary"
            />
            <IconButton
              text="Invite"
              href="https://discord.com/api/oauth2/authorize?client_id=1056742271913041972&permissions=4398046510967&scope=applications.commands%20bot"
              icon={<FaUserPlus />}
              variant="secondary"
            />
          </div>
        </div>
        <div className="flex justify-around gap-4">
          <div className="hidden sm:flex">
            <ToggleTheme />
          </div>
          <Dropdown />
        </div>
      </header>
      <Separator />
    </div>
  )
}
