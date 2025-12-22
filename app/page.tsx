import { SiteNavbar } from "@/app/components/site-navbar"
import { Hero } from "@/app/components/hero"
import LatestNews from "./components/latest-news"
import QuoteStrip from "./components/quote-strip"
import { UpcomingEvents } from "./components/upcomingevents"
import SubHero from "./components/sub-hero"

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <Hero />
        <LatestNews />
        <QuoteStrip />
        <UpcomingEvents />
        <div className="flex flex-col">
          <SubHero />
        </div>
      </main>
    </>
  )
}
