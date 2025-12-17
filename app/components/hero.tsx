import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="relative h-[70vh] w-full">
        <Image
          src="/kabah.png" // replace with your image
          alt="Empowering women"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="max-w-4xl text-center text-4xl font-bold text-white md:text-6xl">
          Educating & Empowering <br className="hidden md:block" />
          the Ummah
        </h1>
      </div>

      {/* CTA panels */}
      <div className="grid w-full grid-cols-1 md:grid-cols-3">
        <Link
          href="/mission"
          className="bg-rose-500 px-6 py-10 text-white hover:bg-rose-600"
        >
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-2 text-sm opacity-90">
            Our Goal, Vision & Commitment
          </p>
        </Link>

        <Link
          href="/events"
          className="bg-blue-500 px-6 py-10 text-white hover:bg-blue-600"
        >
          <h3 className="text-2xl font-semibold">Our Events</h3>
          <p className="mt-2 text-sm opacity-90">
            Register & Help Make Change
          </p>
        </Link>

        <Link
          href="/get-involved"
          className="bg-indigo-700 px-6 py-10 text-white hover:bg-indigo-800"
        >
          <h3 className="text-2xl font-semibold">Get Involved</h3>
          <p className="mt-2 text-sm opacity-90">
            Volunteer, Participate, or Donate
          </p>
        </Link>
      </div>
    </section>
  )
}
