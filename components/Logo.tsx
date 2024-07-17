"use client"

import Link from "next/link"
import LogoIcon from "./LogoIcon"

export default function Logo() {
  return (
    <Link href="/" className="flex cursor-pointer items-center gap-3">
      <LogoIcon />
      <h1 className="text-lg font-bold tracking-wider">Nico</h1>
    </Link>
  )
}
