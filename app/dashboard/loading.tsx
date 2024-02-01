import { ServerListSkeleton } from "@/components/GuildList"

export default function Loading() {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-4xl font-bold text-center">
        Choose server to manage:
      </h1>
      <ServerListSkeleton />
      <h1 className="text-4xl font-bold text-center">Invite bot to server:</h1>
      <ServerListSkeleton />
    </div>
  )
}
