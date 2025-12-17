import { SiteNavbar } from "@/app/components/site-navbar"
import { Hero } from "@/app/components/hero"
import { SiteFooter } from "@/app/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <Hero />
      </main>
      <SiteFooter />
    </>
  )
}
