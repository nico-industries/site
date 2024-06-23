import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type FeatureCardProps = {
  heading: string
  children?: string[]
  reverse?: boolean
}

export default function FeatureCard({
  heading,
  children,
  reverse,
  ...props
}: FeatureCardProps) {
  const flexDirection = reverse
    ? "flex-col-reverse sm:flex-row-reverse"
    : "flex-col sm:flex-row"
  return (
    <article
      className={cn(
        "mx-auto my-16 flex w-full max-w-5xl items-center justify-around sm:my-32 gap-28",
        flexDirection,
      )}
      {...props}
    >
      <article className="rounded-lg border p-6 max-w-lg sm:max-w-md">
        <h1 className="text-2xl capitalize leading-10 tracking-tight">
          {heading}
        </h1>
        <p className="line-clamp-3 text-balance leading-relaxed text-xs/tight sm:text-sm/tight mt-2">
          {children}
        </p>
        <Button variant={"outline"} className="mt-6 w-full">
          Learn more
        </Button>
      </article>
      <div className="hidden sm:block">dummy example</div>
    </article>
  )
}
