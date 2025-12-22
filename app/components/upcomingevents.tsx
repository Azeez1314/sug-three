import { Button } from "@/app/components/ui/button"

type EventItem = {
  date: string
  title: string
  location: string
}

const events: EventItem[] = [
  {
    date: "Sun 23 Sept",
    title: "10K Against Breast Cancer",
    location: "San Francisco",
  },
  {
    date: "Tue 20 Nov",
    title: "Women Engineers Teach Javascript",
    location: "San Francisco",
  },
  {
    date: "Wed 19 Dec",
    title: "Lecture: The Gender Pay Gap",
    location: "San Francisco",
  },
]

export function UpcomingEvents() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Upcoming Events
        </h2>

        <div className="mt-12 divide-y border-t">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between"
            >
              {/* Event info */}
              <div>
                <p className="text-sm text-muted-foreground">
                  {event.date}
                </p>
                <p className="mt-1 text-base font-medium">
                  {event.title}{" "}
                  <span className="text-muted-foreground">
                    / {event.location}
                  </span>
                </p>
              </div>

              {/* CTA */}
              <Button
                className="w-full rounded-none bg-rose-600 px-8 py-6 text-sm font-medium text-white hover:bg-rose-700 md:w-auto"
              >
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
