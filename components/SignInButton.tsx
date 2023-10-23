import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function SignInButton({
  callbackUrl,
}: {
  callbackUrl?: string
}) {
  return (
    <Button
      variant="outline"
      onClick={() => signIn("discord", { callbackUrl })}
    >
      Sign in
    </Button>
  )
}
