import Reveal from "@/components/animation/Reveal";
import { experiences } from "@/data/siteData";

export default function Experiences() {
  return (
    <section className="bg-[#E9E3D5] px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B58B4A]">
            Life at Tulas
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight text-[#183B2B] sm:text-5xl lg:text-6xl">
            More than a school.
            <br />
            <span className="font-serif italic">A place to become.</span>
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-[#183B2B]/15 border-y border-[#183B2B]/15">
          {experiences.map((experience, index) => (
            <Reveal key={experience.number} delay={index * 0.08}>
              <div className="grid gap-5 py-9 md:grid-cols-[100px_1fr_1.3fr] md:items-center">
                <span className="text-sm text-[#B58B4A]">
                  {experience.number}
                </span>

                <h3 className="text-2xl font-medium text-[#183B2B]">
                  {experience.title}
                </h3>

                <p className="text-sm leading-6 text-[#183B2B]/60">
                  {experience.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}