import { SiteNavbar } from "@/app/components/site-navbar"
import { Hero } from "@/app/components/hero"
import SubHero from "./components/sub-hero"

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <div className="flex flex-col">
          <SubHero />
        </div>
      </main>
    </>
  )
}
