"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/animation/Reveal";
import { sports } from "@/data/siteData";

const sportImages = [
  {
    src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85",
    alt: "Football",
  },
  {
    src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",
    alt: "Cricket",
  },
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85",
    alt: "Basketball",
  },
  {
    src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=85",
    alt: "Swimming",
  },
  {
    src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1000&q=85",
    alt: "Tennis",
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
    alt: "Athletics",
  },
];

export default function Sports() {
  return (
    <section
      id="sports"
      className="overflow-hidden bg-[#F5F1E8] py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B58B4A]">
                16+ Sports
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-medium tracking-tight text-[#183B2B] sm:text-5xl lg:text-6xl">
                Strong minds.
                <br />
                <span className="font-serif italic">
                  Stronger spirits.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#183B2B]/60">
              Sport develops much more than physical strength. It teaches
              discipline, resilience, teamwork and leadership.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <Reveal key={sport} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#183B2B]"
              >
                <Image
                  src={sportImages[index].src}
                  alt={sportImages[index].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071a12] via-[#071a12]/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-xs font-medium text-[#D8B879]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-1 text-xl font-medium text-white sm:text-2xl">
                    {sport}
                  </h3>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}