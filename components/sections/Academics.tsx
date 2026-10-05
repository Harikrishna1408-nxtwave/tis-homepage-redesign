import Reveal from "@/components/animation/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Academics() {
  return (
    <section id="academics" className="bg-[#183B2B] px-5 py-24 text-white lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Academics"
            tone="light"
            title="Curiosity is the beginning of every great education."
            description="A learning approach that combines academic rigour with experiential, creative and technology-enabled learning."
            />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-3">
          {[
            ["01", "CBSE Curriculum", "A structured academic foundation with opportunities for exploration and deeper learning."],
            ["02", "Experiential Learning", "Learning through projects, activities and experiences that connect ideas to the real world."],
            ["03", "Future Ready", "Technology, creativity and critical thinking prepare students for a changing world."],
          ].map(([number, title, description], index) => (
            <Reveal key={number} delay={index * 0.1}>
              <article className="h-full bg-[#183B2B] p-8 sm:p-10">
                <span className="text-sm text-[#D8B879]">{number}</span>
                <h3 className="mt-16 text-2xl font-medium">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/60">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}