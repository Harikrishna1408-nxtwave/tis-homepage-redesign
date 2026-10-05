import Reveal from "@/components/animation/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  "Pollution-free 22-acre campus",
  "Holistic academic environment",
  "Extensive sports infrastructure",
  "Experiential learning approach",
  "Safe and supportive environment",
  "Focus on character and leadership",
];

export default function WhyTis() {
  return (
    <section className="bg-[#183B2B] px-5 py-24 text-white lg:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Why Tulas"
            tone="light"
            title="Designed around the whole child."
            description="Every part of the Tulas experience is designed to help students grow academically, physically, creatively and personally."
          />
        </Reveal>

        <div className="grid gap-0 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <Reveal key={reason} delay={index * 0.06}>
              <div className="border-b border-white/10 p-6 first:pt-0 sm:nth-[odd]:border-r">
                <span className="text-xs text-[#D8B879]">
                  0{index + 1}
                </span>
                <p className="mt-5 text-base text-white/80">{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}