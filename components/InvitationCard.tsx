import { FaUserPlus } from "react-icons/fa"
import IconButton from "./IconButton"
import LogoIcon from "./LogoIcon"

export default function InvitationCard() {
  return (
    <div className="">
      <section className="flex flex-col items-center px-6 py-24">
        <article className="flex w-full max-w-4xl flex-row items-center justify-between gap-4 rounded-md border p-5 sm:justify-around lg:px-16 lg:py-8">
          <div className="flex flex-col">
            <h1 className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-limey to-blueish to-70% bg-clip-text text-2xl tracking-tighter text-transparent xl:text-4xl">
              Add Nico to Your Server
            </h1>
            <IconButton
              text="Invite Nico"
              href="https://discord.com/api/oauth2/authorize?client_id=1056742271913041972&permissions=4398046510967&scope=applications.commands%20bot"
              icon={<FaUserPlus />}
              variant="fancy"
              className="my-6 w-8/12"
            />
          </div>
          <LogoIcon className="size-12 max-sm:hidden sm:size-20 xl:size-40" />
        </article>
      </section>
    </div>
  )
}
