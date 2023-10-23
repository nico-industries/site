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
          href="/"
          icon={<BsDiscord />}
          variant="secondary"
        />
        <IconButton
          text="Invite"
          href="/"
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
