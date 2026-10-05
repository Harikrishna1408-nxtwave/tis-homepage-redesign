import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animation/Reveal";

export default function Admissions() {
  return (
    <section id="admissions" className="bg-[#B58B4A] px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#183B2B]/60">
            Admissions
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight text-[#183B2B] sm:text-6xl lg:text-8xl">
            Your child&apos;s
            <br />
            <span className="font-serif italic">next chapter.</span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="https://tis.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-[#183B2B] px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Explore Admissions
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <p className="max-w-sm text-sm leading-6 text-[#183B2B]/60">
              Discover the Tulas experience and take the first step toward
              joining our learning community.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}