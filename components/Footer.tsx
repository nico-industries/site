import { Separator } from "@/components/ui/separator"
import { FaDiscord, FaGithub } from "react-icons/fa"
import IconButton from "./IconButton"

export default function Footer() {
  return (
    <div className="flex flex-col">
      <Separator />
      <footer className="m-auto flex w-full max-w-7xl flex-col justify-between px-6 py-4">
        <div className="flex w-full flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="text-lg font-bold leading-10 tracking-wider">
              Nico
            </h1>
            <div className="flex flex-col">
              <p className="text-pretty text-sm/tight sm:text-sm/tight">
                Advanced Discord bot with versatile capabilities.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm max-md:py-6 md:flex-row md:gap-8 xl:gap-12">
            <div className="flex flex-col">
              {" "}
              <h2 className="leading-7">Site map</h2>{" "}
              <ul>
                <li>example</li>
                <li>example</li>
                <li>example</li>
              </ul>
            </div>
            <div className="flex flex-col">
              {" "}
              <h2 className="leading-7">Links</h2>{" "}
              <ul>
                <li>example</li>
                <li>example</li>
                <li>example</li>
              </ul>
            </div>
            <div className="flex flex-col">
              {" "}
              <h2 className="leading-7">Contact</h2>{" "}
              <ul>
                <li>example</li>
                <li>example</li>
                <li>example</li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="items-center">
            <p className="text-pretty text-xs/tight">
              Nico Industries &copy; All rights reserved.
            </p>
          </div>
          <div className="flex flex-row justify-start gap-x-5 max-md:py-5">
            <IconButton
              icon={<FaGithub className="size-6" />}
              variant="ghost"
            />
            <IconButton
              icon={<FaDiscord className="size-6" />}
              variant="ghost"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
