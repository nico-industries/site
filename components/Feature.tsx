"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

type FeatureCardProps = {
  heading: string
  body: string
  reverse?: boolean
}

export default function Feature({
  heading,
  body,
  reverse,
  ...props
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      className={cn(
        "flex w-full flex-col items-center justify-around gap-28 xs:px-6 sm:px-20",
        reverse ? "sm:flex-row-reverse" : "sm:flex-row",
      )}
      {...props}
    >
      <article className="w-full max-w-lg rounded-lg border p-6">
        <h1 className="text-nowrap text-2xl capitalize leading-10 tracking-tight">
          {heading}
        </h1>
        <p className="mt-2 line-clamp-3 text-balance text-xs/tight leading-relaxed sm:text-sm/tight">
          {body}
        </p>
        <Button variant={"outline"} className="mt-6 w-full">
          Learn more
        </Button>
      </article>
      <div className="w-full max-w-lg">dummy example</div>
    </motion.div>
  )
}
