import Reveal from "@/components/animation/Reveal";
import { schoolStats } from "@/data/siteData";

export default function Stats() {
  return (
    <section className="border-b border-[#183B2B]/10 bg-[#F5F1E8]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {schoolStats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.08}
            className="border-r border-[#183B2B]/10 p-7 last:border-r-0 sm:p-10"
          >
            <p className="text-3xl font-semibold tracking-tight text-[#183B2B] sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 max-w-[150px] text-xs uppercase leading-5 tracking-[0.12em] text-[#183B2B]/55">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}