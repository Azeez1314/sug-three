import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
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
  )
}
