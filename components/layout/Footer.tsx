import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#10291F] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-semibold tracking-[0.18em]">TULAS</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
              International School
            </p>

            <p className="mt-8 max-w-sm text-sm leading-6 text-white/55">
              Nurturing confident, curious and responsible global citizens
              through a holistic educational experience.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D8B879]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="#about" className="text-sm text-white/65 hover:text-white">
                About
              </Link>
              <Link href="#academics" className="text-sm text-white/65 hover:text-white">
                Academics
              </Link>
              <Link href="#sports" className="text-sm text-white/65 hover:text-white">
                Sports
              </Link>
              <Link href="#admissions" className="text-sm text-white/65 hover:text-white">
                Admissions
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D8B879]">
              Connect
            </p>

            <a
              href="https://tis.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 text-sm text-white/65 hover:text-white"
            >
              Visit official website
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/35">
          © {new Date().getFullYear()} Tulas International School. Homepage
          redesign assessment.
        </div>
      </div>
    </footer>
  );
}