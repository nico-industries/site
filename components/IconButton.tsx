"use client"

import { Label } from "./ui/label"
import { Button, ButtonProps } from "./ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

type IconButtonProps = ButtonProps & {
  text: string
  icon: React.ReactNode
  href: string
}

export default function IconButton({
  text,
  icon,
  href,
  className,
  ...props
}: IconButtonProps) {
  return (
    <Button
      asChild
      className={cn("flex gap-2 my-auto cursor-pointer", className)}
      {...props}
    >
      <Link href={href}>
        {icon}
        <div className="hidden sm:block">
          <Label className="cursor-pointer">{text}</Label>
          <span className="sr-only">{text}</span>
        </div>
      </Link>
    </Button>
  )
}
