import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Eye, MessageSquare, Heart } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Female Robotics Team Wins Major Award",
    image: "/01-sug3.webp",
    views: 0,
    comments: 0,
    likes: 7,
  },
  {
    id: 2,
    title: "Women Overtake Men in College Degrees",
    image: "/02-sug3.webp",
    views: 0,
    comments: 0,
    likes: 8,
  },
  {
    id: 3,
    title: "Countries with the Best Parental Leave Policies",
    image: "/03-sug3.jpg",
    views: 0,
    comments: 0,
    likes: 2,
  },
]

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


export function Hero() {
  return (
    <>
    <section className="relative w-full">
  {/* Hero container */}
  <div className="relative flex min-h-[70vh] flex-col items-center justify-center md:h-screen">
    {/* Background image */}
    <Image
      src="/kabah.png"
      alt="Empowering women"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />

    {/* Hero text */}
    <div className="relative z-10 px-4 text-center">
      <h1
        className="
          max-w-4xl font-bold text-white leading-tight
          text-3xl sm:text-5xl md:text-6xl lg:text-7xl
        "
      >
        Educating & Empowering
        <br className="hidden sm:block" />
        the Ummah
      </h1>
    </div>
  </div>

  {/* CTA panels */}
  <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <Link
      href="/mission"
      className="bg-rose-500 px-6 py-8 sm:py-10 text-white text-center hover:bg-rose-600"
    >
      <h3 className="text-xl sm:text-2xl font-semibold">Our Mission</h3>
      <p className="mt-2 text-sm sm:text-base opacity-90">
        Our Goal, Vision & Commitment
      </p>
    </Link>

    <Link
      href="/events"
      className="bg-blue-500 px-6 py-8 sm:py-10 text-white text-center hover:bg-blue-600"
    >
      <h3 className="text-xl sm:text-2xl font-semibold">Our Events</h3>
      <p className="mt-2 text-sm sm:text-base opacity-90">
        Register & Help Make Change
      </p>
    </Link>

    <Link
      href="/get-involved"
      className="bg-indigo-700 px-6 py-8 sm:py-10 text-white text-center hover:bg-indigo-800 sm:col-span-2 md:col-span-1"
    >
      <h3 className="text-xl sm:text-2xl font-semibold">Get Involved</h3>
      <p className="mt-2 text-sm sm:text-base opacity-90">
        Volunteer, Participate, or Donate
      </p>
    </Link>
  </div>
    </section>

    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 bg-white">
  {/* Heading */}
  <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-black">
    Latest News
  </h2>

  {/* Cards */}
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {newsItems.map((item) => (
      <Card
        key={item.id}
        className="overflow-hidden transition hover:shadow-lg"
      >
        <div className="relative h-56 w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="p-6">
          <h3 className="text-lg font-semibold leading-snug">
            {item.title}
          </h3>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t px-6 py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {item.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              {item.comments}
            </span>
          </div>

          <span className="flex items-center gap-1 text-rose-500">
            <Heart className="h-4 w-4" />
            {item.likes}
          </span>
        </CardFooter>
      </Card>
    ))}
  </div>

  {/* CTA */}
  <div className="mt-14 flex justify-center">
    <Button size="lg" className="rounded-none px-10">
      Read More
    </Button>
  </div>
      </div>
    </section>

    <section className="bg-blue-900 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xl italic leading-relaxed text-white md:text-2xl">
          I am no bird; and no net ensnares me; I am a free human being with an
          independent will.
        </p>
      </div>
    </section>

    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Upcoming Events
        </h2>

        <div className="mt-12 divide-y-4 border-t-4 border-b-4">
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
    </>
  )
}


    
 


    