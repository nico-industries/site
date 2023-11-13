"use client"

import ToggleTheme from "./ToggleTheme"
import Dropdown from "./Dropdown"
import { BsDiscord } from "react-icons/bs"
import { FaUserPlus } from "react-icons/fa"
import Logo from "./Logo"
import IconButton from "./IconButton"

export default function Navbar() {
  return (
    <nav className="flex justify-between m-2">
      <div className="flex justify-start gap-4">
        <Logo />
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
      <div className="flex justify-around gap-4">
        <ToggleTheme />
        <Dropdown />
      </div>
    </nav>
  )
}
