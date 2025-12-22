"use client"

import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6"

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
]

export function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 md:flex">
      <ul className="flex flex-col overflow-hidden rounded-l-lg shadow-lg">
        {socials.map((item) => {
          const Icon = item.icon

          return (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="flex h-12 w-12 items-center justify-center bg-[#1f3c88] text-white hover:bg-[#3559b3]"
              >
                <Icon className="h-7 w-7" />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
