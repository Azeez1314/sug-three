import EventCard from "./event-card"

const events = [
  {
    title: "Women in Leadership Conference",
    date: "March 12, 2026",
    location: "London, UK",
    image: "/events/event1.jpg",
  },
  {
    title: "Girls in Tech Workshop",
    date: "April 5, 2026",
    location: "Manchester, UK",
    image: "/events/event2.jpg",
  },
  {
    title: "Community Fundraising Gala",
    date: "May 20, 2026",
    location: "Birmingham, UK",
    image: "/events/event3.jpg",
  },
]

export default function EventsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="mt-2 text-muted-foreground">
          Be part of our impactful gatherings and programmes.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      </div>
    </section>
  )
}
