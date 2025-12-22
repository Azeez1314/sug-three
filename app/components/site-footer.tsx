"use client"

import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 bg-white w-full">
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

      <div className="bg-black text-gray-300 border-t border-gray-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} Sheffield Usrah. Powered and secured by <a
              href="https://nanocrafts.xyz"
              className="tracking-tight text-white underline"
            >
              Nanocrafts
          </a>
      </div>
    </footer>
  )
}
