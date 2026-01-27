
import { AboutHero } from "@/app/components/about/about-hero"
import { AboutMission } from "@/app/components/about/about-mission"
import { AboutImpact } from "@/app/components/about/about-impact"
import { AboutUrgency } from "@/app/components/about/about-urgency"
import { AboutCTA } from "@/app/components/about/about-cta"

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <AboutMission />
        <AboutImpact />
        <AboutUrgency />
        <AboutCTA />
      </main>
    </>
  )
}
