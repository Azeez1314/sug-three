"use client"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Bell, ChevronDown } from "lucide-react"

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-lg tracking-wide">SHEFFIELD USRAH</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/support-us" className="hover:text-gray-300">Support Us</Link>
          <Link href="/news" className="hover:text-gray-300">News</Link>
          <Link href="/events" className="hover:text-gray-300">Events</Link>
          <Link href="/podcast" className="hover:text-gray-300">Podcast</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 text-gray-300" />
          <div className="flex items-center gap-1 rounded-full bg-gray-700 px-3 py-1 text-sm">
            <span>S</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white">
            Donate
          </Button>
        </div>
      </div>
    </header>
  )
}
