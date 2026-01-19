import EventsHero from "@/app/components/events/events-hero"
import EventsGrid from "@/app/components/events/events-grid"

export default function EventsPage() {
  return (
    <main className="flex flex-col">
      <EventsHero />
      <EventsGrid />
    </main>
  )
}
