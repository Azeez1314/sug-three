import Image from "next/image"
import { Button } from "@/app/components/ui/button"

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
    </section>
  )
}
