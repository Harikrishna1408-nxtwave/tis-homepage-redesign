"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#183B2B]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#10291f]/95 via-[#183B2B]/65 to-[#183B2B]/20" />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#D8B879]">
            Tulas International School
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Where tradition
            <br />
            <span className="font-serif italic text-[#D8B879]">
              meets tomorrow.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            A modern learning environment where academic excellence,
            character, creativity and exploration shape future-ready global
            citizens.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#admissions"
              className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#183B2B] transition-transform hover:scale-105"
            >
              Begin Your Journey
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#183B2B]"
            >
              Discover Tulas
            </Link>
          </div>
        </motion.div>

        <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/55">
          <ArrowDown size={15} className="animate-bounce" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}