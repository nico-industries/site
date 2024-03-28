import WelcomeForm from "@/components/WelcomeForm"
import { ensureGuildExists } from "@/lib/db"

export const dynamic = "force-dynamic"

export default async function Page({
  params,
}: {
  params: { guildId: string }
}) {
  const guild = await ensureGuildExists(params.guildId)
  return <WelcomeForm guild={guild} />
}
