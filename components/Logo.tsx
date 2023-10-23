"use client"

import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="flex cursor-pointer items-center gap-2">
      <Image src="/skurczybyki.png" alt="Site Logo" width={48} height={48} />
      <h1 className="hidden md:block text-lg font-bold">Skurczybyki</h1>
    </Link>
  )
}
