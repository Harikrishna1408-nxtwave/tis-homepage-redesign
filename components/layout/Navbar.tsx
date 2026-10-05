"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-0"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-5 transition-all duration-300 lg:px-8 ${
          scrolled
            ? "rounded-full border border-[#183B2B]/10 bg-[#F5F1E8]/95 shadow-lg backdrop-blur-xl"
            : ""
        }`}
      >
        <Link
          href="/"
          className="relative z-10 flex flex-col"
          aria-label="Tulas International School home"
        >
          <span
            className={`text-xl font-semibold tracking-[0.18em] transition-colors duration-300 ${
              scrolled ? "text-[#183B2B]" : "text-white"
            }`}
          >
            TULAS
          </span>

          <span
            className={`text-[9px] uppercase tracking-[0.35em] transition-colors duration-300 ${
              scrolled ? "text-[#183B2B]/55" : "text-white/70"
            }`}
          >
            International School
          </span>
        </Link>

        <div
          className={`hidden items-center gap-8 rounded-full border px-6 py-3 backdrop-blur-md transition-all duration-300 lg:flex ${
            scrolled
              ? "border-[#183B2B]/10 bg-[#183B2B]/5"
              : "border-white/15 bg-black/15"
          }`}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-[#183B2B]/75 hover:text-[#183B2B]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#admissions"
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:scale-105 ${
              scrolled
                ? "bg-[#183B2B] text-white"
                : "bg-white text-[#183B2B]"
            }`}
          >
            Apply Now
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className={`relative z-10 rounded-full border p-3 backdrop-blur-md transition-colors lg:hidden ${
            scrolled
              ? "border-[#183B2B]/10 bg-[#183B2B]/5 text-[#183B2B]"
              : "border-white/20 bg-black/20 text-white"
          }`}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 rounded-3xl border border-[#183B2B]/10 bg-[#183B2B] p-6 shadow-2xl lg:hidden">
          <div className="flex flex-col gap-5">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#admissions"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center font-medium text-[#183B2B]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}