import DiscordInput from "@/components/DiscordInput"
import Features from "@/components/Features"
import IconButton from "@/components/IconButton"
import InvitationCard from "@/components/InvitationCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaUserPlus } from "react-icons/fa"
import { FiChevronsDown } from "react-icons/fi"

export default async function Home() {
  return (
    <main className="flex flex-grow flex-col items-center gap-7">
      <section className="flex w-full flex-col items-center px-6 pb-24 pt-32 lg:pt-64">
        <div className="absolute -left-1 top-8 -z-10 h-80 w-40 bg-gradient-to-br from-primary from-5% opacity-30 blur-3xl filter sm:w-96"></div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
              <h1 className="duration-350 text-nowrap text-2xl tracking-tighter animate-in fade-in-25 slide-in-from-top-10 xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="bg-gradient-to-r from-limey to-blueish bg-clip-text text-transparent">
                  Elevate
                </span>
                <span> your Discord Server</span>
              </h1>
              <h2 className="duration-400 text-xl tracking-tighter animate-in fade-in-25 slide-in-from-top-10 sm:text-2xl md:text-3xl lg:text-4xl">
                <span>To The </span>
                <span className="bg-gradient-to-tr from-violet-700 to-fuchsia-500 bg-clip-text text-transparent">
                  Next Level
                </span>
              </h2>
            </div>

            <p className="w-10/12 text-balance text-center text-xs/tight duration-500 animate-in fade-in-25 slide-in-from-top-10 sm:text-sm/tight lg:text-base/tight">
              Enhance your server with our advanced Discord bot, simplifying
              moderation and{" "}
              <span className="bg-gradient-to-r from-primary to-[#3300C6] bg-clip-text text-transparent">
                much more actions
              </span>
              .
            </p>
          </div>

          <div className="flex justify-between gap-7">
            <IconButton
              text="Invite"
              href="https://discord.com/api/oauth2/authorize?client_id=1056742271913041972&permissions=4398046510967&scope=applications.commands%20bot"
              icon={<FaUserPlus />}
              variant="fancy"
            />
            <Button variant="outline">Manage</Button>
          </div>
        </div>

        <Link
          className="flex flex-col items-center gap-1 pt-52 text-xs text-primary"
          href="#features"
        >
          Learn more
          <FiChevronsDown className="animate-bounce text-primary" />
        </Link>
      </section>

      <DiscordInput />
      <Features />
      <section className="relative m-auto my-32 flex flex-col items-center gap-2 md:gap-4">
        <div className="absolute -left-1 top-8 -z-10 h-20 w-44 bg-gradient-to-br from-limey from-5% blur-3xl filter dark:opacity-30 sm:w-64 md:w-80 lg:w-96"></div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Explore <span className="text-limey">all</span> of them
        </h1>
        <Button variant={"outline"} className="w-10/12 md:w-8/12">
          Explore all features
        </Button>
      </section>

      <InvitationCard />
    </main>
  )
}
