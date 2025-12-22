import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"

export default function SubHero() {
  return (
    <section className="w-full">
      <div className="mx-auto grid min-h-[80vh] grid-cols-1 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center bg-[#1f3c88] px-6 py-16 text-white md:px-12 lg:px-20">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Join Us
          </h1>

          <p className="mb-8 max-w-md text-lg leading-relaxed md:text-xl">
            Empower Our <br className="hidden sm:block" />
            Women And Girls
          </p>

          <Button
            size="lg"
            className="w-fit rounded-md bg-rose-500 px-8 py-6 text-base font-semibold hover:bg-rose-600"
          >
            Donate Now
          </Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[300px] md:min-h-full">
          <Image
            src="/join.jpg"
            alt="Women joining hands in solidarity"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div className="bg-white mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 w-full text-black">
    {/* Brand */}
    <div>
      <h3 className="font-semibold text-lg">Sheffield Usrah</h3>
      <p className="mt-3 text-sm">
        Educating and empowering the Ummah through faith, community, and action.
      </p>
    </div>

    {/* Links */}
    <div>
      <h4 className="font-medium">Explore</h4>
      <ul className="mt-3 space-y-2 text-sm">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/podcast">Podcast</Link></li>
      </ul>
    </div>

    <div>
      <h4 className="font-medium">Support</h4>
      <ul className="mt-3 space-y-2 text-sm">
        <li><Link href="/donate">Donate</Link></li>
        <li><Link href="/volunteer">Volunteer</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>

    <div>
      <h4 className="font-medium">Legal</h4>
      <ul className="mt-3 space-y-2 text-sm">
        <li><Link href="/privacy">Privacy Policy</Link></li>
        <li><Link href="/terms">Terms of Service</Link></li>
      </ul>
    </div>
   </div>
    </section>
  )
}
