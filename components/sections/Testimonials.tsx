import Reveal from "@/components/animation/Reveal";
import { communityHighlights } from "@/data/siteData";

export default function Testimonials() {
  return (
    <section className="bg-[#E9E3D5] px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B58B4A]">
            The Tulas Experience
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium text-[#183B2B] sm:text-5xl">
            An education built
            <span className="font-serif italic"> around possibility.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {communityHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <article className="group h-full rounded-[1.5rem] bg-[#F5F1E8] p-7 transition-transform duration-300 hover:-translate-y-2 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B58B4A]/40 text-sm text-[#B58B4A]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-12 text-2xl font-medium leading-tight text-[#183B2B]">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#183B2B]/60">
                  {item.description}
                </p>

                <div className="mt-10 h-px w-full bg-[#183B2B]/10 transition-all duration-500 group-hover:bg-[#B58B4A]" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}