import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import IconButton from "./IconButton"

export default function Footer() {
  return (
    <div className="flex flex-col">
      <Separator />
      <footer className="end-0 m-auto my-4 flex w-full max-w-3xl flex-col justify-between px-3 sm:flex-row">
        <div className="w-full sm:w-5/12">
          <h1 className="text-lg font-bold leading-10 tracking-wider">Nico</h1>
          <div className="flex flex-col">
            <p className="text-pretty text-xs/tight sm:text-sm/tight">
              Advanced Discord bot with versatile capabilities
            </p>
            <Separator className="mt-3 hidden sm:block" />
            <div className="my-5 flex flex-row justify-start gap-x-5">
              <IconButton
                icon={<FaGithub className="size-6" />}
                variant={"ghost"}
              />
              <IconButton
                icon={<FaDiscord className="size-6" />}
                variant={"ghost"}
              />
            </div>
            <p className="text-pretty text-xs/tight">
              Nico Industries &copy;All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-col">site map legal media</div>
      </footer>
    </div>
  )
}
