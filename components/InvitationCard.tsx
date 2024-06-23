import { FaUserPlus } from "react-icons/fa"
import IconButton from "./IconButton"
import LogoIcon from "./LogoIcon"

export default function InvitationCard() {
  return (
    <article className="m-12 flex w-10/12 max-w-4xl flex-row items-center justify-between sm:justify-around rounded-3xl border px-5 py-2 shadow-lg shadow-[#3D52D0] sm:w-8/12 md:w-6/12 lg:px-16 lg:py-8">
      <div className="flex w-3/5 flex-col ">
        <h1 className="text-xl tracking-tighter text-foreground xl:text-4xl">
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
      <LogoIcon className="size-12 sm:size-20 xl:size-40" />
    </article>
  )
}
