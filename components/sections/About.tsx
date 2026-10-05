import Image from "next/image";
import Reveal from "@/components/animation/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-[#F5F1E8] px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85"
                alt="School campus"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <SectionHeading
            eyebrow="Discover Tulas"
            title="Education that extends beyond the classroom."
            description="Tulas International School brings together academic learning, sports, creativity and character-building in an environment designed to help students discover their potential."
          />

          <div className="mt-10 grid gap-6 border-t border-[#183B2B]/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#183B2B]">
                Holistic Learning
              </p>
              <p className="mt-2 text-sm leading-6 text-[#183B2B]/60">
                Learning experiences that encourage curiosity, confidence and
                independent thinking.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#183B2B]">
                Global Outlook
              </p>
              <p className="mt-2 text-sm leading-6 text-[#183B2B]/60">
                Preparing students to engage confidently with an evolving
                world.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}