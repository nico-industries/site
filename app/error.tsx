"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex justify-center items-center gap-4 flex-col h-screen">
      <title className="text-4xl">Something went wrong!</title>
      <Button onClick={() => reset()} size="lg">
        Try again
      </Button>
    </div>
  )
}
