import Reveal from "@/components/animation/Reveal";

export default function Awards() {
  return (
    <section className="bg-[#F5F1E8] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl border-y border-[#183B2B]/10 py-10">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#B58B4A]">
                Recognition
              </p>
              <h2 className="mt-3 text-2xl font-medium text-[#183B2B]">
                Excellence recognised.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-[#183B2B]/55">
                A growing record of recognition, partnerships and achievements
                reflects the school&apos;s commitment to educational excellence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}