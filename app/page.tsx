"use client"
import { useRef } from "react"
import IconButton from "@/components/IconButton"
import FeatureCard from "@/components/FeatureCard"
import InvitationCard from "@/components/InvitationCard"
import { Button } from "@/components/ui/button"
import { FaUserPlus } from "react-icons/fa"
import { FiChevronsDown } from "react-icons/fi"
import { BsPlusCircle } from "react-icons/bs"
import { HiGif } from "react-icons/hi2"
import { IoGift } from "react-icons/io5"
import { BsEmojiSmile } from "react-icons/bs"
import { TypeAnimation } from "react-type-animation"

export default async function Home() {
  const discordInput = useRef<HTMLDivElement | null>(null)

  return (
    <main className="flex flex-grow flex-col items-center">
      <section className="mt-32 flex flex-col items-center lg:mt-64">
        <div className="absolute -left-1 top-8 -z-10 h-80 w-40 bg-gradient-to-br from-aqua from-5% opacity-30 blur-3xl filter sm:w-96"></div>
        <h1 className="duration-350 text-nowrap text-2xl tracking-tighter animate-in fade-in-25 slide-in-from-top-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
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

        <p className="mt-5 w-10/12 text-balance text-center text-xs/tight duration-500 animate-in fade-in-25 slide-in-from-top-10 sm:text-sm/tight lg:text-base/tight">
          Enhance your server with our advanced Discord bot, simplifying
          moderation and{" "}
          <span className="bg-gradient-to-r from-aqua to-[#3300C6] bg-clip-text text-transparent">
            much more actions
          </span>
          .
        </p>

        <div className="mt-7 flex justify-between gap-7">
          <IconButton
            text="Invite"
            href="https://discord.com/api/oauth2/authorize?client_id=1056742271913041972&permissions=4398046510967&scope=applications.commands%20bot"
            icon={<FaUserPlus />}
            variant="fancy"
          />
          <Button variant={"outline"}>Manage</Button>
        </div>

        <button
          className="mt-52 flex flex-col items-center text-aqua"
          onClick={() =>
            discordInput.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn more
          <FiChevronsDown className="mt-1 animate-bounce text-aqua" />
        </button>
      </section>

      <section
        // ref={discordInput}
        className="relative mb-20 mt-64 flex h-14 w-10/12 max-w-4xl flex-row content-center items-center rounded-xl bg-[#383A40] text-background opacity-90 shadow-xl shadow-aqua/50 dark:bg-[#1C1D1F] dark:text-foreground sm:w-8/12 md:h-28"
      >
        <div className="absolute -top-16" ref={discordInput}></div>
        <BsPlusCircle className="order-first m-6 size-5 shrink-0 hover:opacity-70 max-sm:hidden md:size-10" />
        <TypeAnimation
          className="order-2 m-6 w-8/12 shrink text-2xl font-extralight tracking-tighter md:text-4xl"
          sequence={[
            "Improve",
            6500,
            "Enhance",
            2500,
            "Elevate",
            1000,
            "Advance",
            5000,
            "Raise",
            7000,
            "Boost",
            10000,
            "Modernize",
            6000,
            "Better",
            3500,
            "Revamp",
            2000,
            "Enrich",
            9200,
            "Perfect",
            5400,
          ]}
          repeat={Infinity}
        />
        <IoGift className="order-3 m-4 size-5 shrink-0 hover:opacity-70 max-sm:hidden md:size-10" />
        <HiGif className="order-4 m-4 size-5 shrink-0 hover:opacity-70 max-sm:hidden md:size-10" />
        <BsEmojiSmile className="order-last m-4 mr-6 size-5 shrink-0 hover:opacity-70 md:size-10" />
      </section>
      <section className="flex w-9/12 flex-col sm:mt-10">
        <FeatureCard heading={"Example feature"}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
          temporibus, enim facilis, ipsam pariatur autem qui eum earum hic
          dolorem deserunt quas dignissimos nobis ullam! Perspiciatis sunt vero
          quae!
        </FeatureCard>
        <FeatureCard heading={"Example feature"} reverse>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
          temporibus, enim facilis,
        </FeatureCard>
        <FeatureCard heading={"Example feature"}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
          temporibus, enim facilis,
        </FeatureCard>
        <FeatureCard heading={"Example feature"} reverse>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
          temporibus, enim facilis Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </FeatureCard>
        <FeatureCard heading="xd" />
      </section>
      <section className="relative m-auto my-32 flex flex-col items-center gap-2 md:gap-4">
        <div className="absolute -left-1 top-8 -z-10 h-20 w-44 bg-gradient-to-br from-limey from-5% blur-3xl filter dark:opacity-30 sm:w-64 md:w-80 lg:w-96"></div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Explore <span className="text-limey">all</span> of them
        </h1>
        <Button
          variant={"outline"}
          size={"default"}
          className="w-10/12 md:w-8/12"
        >
          Explore all features
        </Button>
      </section>

      <InvitationCard />
    </main>
  )
}
