"use client"
import { BsEmojiSmile, BsPlusCircle } from "react-icons/bs"
import { HiGif } from "react-icons/hi2"
import { IoGift } from "react-icons/io5"
import { TypeAnimation } from "react-type-animation"

export default function DiscordInput() {
  return (
    <section className="flex w-full justify-center px-6 py-24">
      <div className="relative flex h-14 w-10/12 max-w-4xl flex-row items-center justify-around rounded-xl bg-[#383A40] text-background opacity-90 shadow-xl shadow-primary/50 dark:bg-[#1C1D1F] dark:text-foreground xs:w-9/12 md:h-28">
        <div className="absolute -top-16" id="features"></div>
        <BsPlusCircle className="m-6 size-5 shrink-0 hover:opacity-70 max-sm:hidden md:ml-8 md:size-10" />
        <TypeAnimation
          className="w-8/12 shrink p-6 text-2xl font-extralight tracking-tighter md:text-4xl"
          sequence={[
            "Improve",
            4500,
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
        <IoGift className="m-4 size-5 shrink-0 hover:opacity-70 max-sm:hidden md:size-10" />
        <HiGif className="m-4 size-5 shrink-0 hover:opacity-70 max-sm:hidden md:size-10" />
        <BsEmojiSmile className="m-4 size-5 shrink-0 hover:opacity-70 md:mr-8 md:size-10" />
      </div>
    </section>
  )
}
