import { notFound, redirect } from "next/navigation"
import { NextResponse, type NextRequest } from "next/server"

export function GET(req: NextRequest) {
  const error_message = req.nextUrl.searchParams.get("error_description")
  if (error_message) {
    return NextResponse.json({ error_message })
  }
  const guild_id = req.nextUrl.searchParams.get("guild_id")
  if (!guild_id) {
    notFound()
  }
  redirect(`/dashboard/${guild_id}`)
}
