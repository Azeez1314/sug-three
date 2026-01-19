import { Button } from "@/app/components/ui/button"

export default function EventsHero() {
  return (
    <section className="w-full bg-[#1f3c88] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Our Events
        </h1>
        <p className="mb-8 max-w-xl text-lg md:text-xl">
          Join our upcoming events and initiatives to empower women and girls in our community.
        </p>
        <Button
          size="lg"
          className="bg-rose-500 hover:bg-rose-600"
        >
          View Upcoming Events
        </Button>
      </div>
    </section>
  )
}
