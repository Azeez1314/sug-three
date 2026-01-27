"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative">
      <div className="relative h-[55vh]">
        <Image
          src="/about-hero.jpg"
          alt="Sheffield Usrah Group community"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            About Sheffield Usrah Group
          </h1>
          <p className="mt-4 text-lg opacity-95">
            A volunteer-led grassroots charity serving faith, families, and the wider
            Sheffield community.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
