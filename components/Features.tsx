import Feature from "./Feature"
export default function Features() {
  return (
    <section className="flex w-full flex-col gap-16 px-6 py-24 sm:gap-28 lg:gap-36">
      <Feature
        heading="Example feature"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
      temporibus, enim facilis, ipsam pariatur autem qui eum earum hic
      dolorem deserunt quas dignissimos nobis ullam! Perspiciatis sunt vero
      quae!"
      ></Feature>
      <Feature
        heading="Example feature"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
      temporibus, enim facilis,"
        reverse
      ></Feature>
      <Feature
        heading="Example feature"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
      temporibus, enim facilis,"
      ></Feature>
      <Feature
        heading="Example feature"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
      temporibus, enim facilis Lorem ipsum dolor sit amet consectetur
      adipisicing elit."
        reverse
      ></Feature>
      <Feature heading="xd" body="" />
    </section>
  )
}
