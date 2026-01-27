import Link from "next/link"
import { Button } from "@/app/components/ui/button"

export function AboutCTA() {
  return (
    <section className="bg-brand-indigo py-16 px-4 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Help Secure a Permanent Home for Community Impact
        </h2>

        <p className="mt-6 text-lg opacity-95">
          This project is not simply about acquiring a building. It is about
          investing in people, connection, and shared futures for Sheffield.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-brand-rose hover:bg-brand-rose/90">
            <Link href="/donate">
              Donate Now
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/get-involved">
              Get Involved
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
