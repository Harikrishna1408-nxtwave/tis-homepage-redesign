import Image from "next/image";
import Reveal from "@/components/animation/Reveal";

export default function Campus() {
  return (
    <section id="campus" className="bg-[#F5F1E8] px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative h-[500px] overflow-hidden rounded-[2rem] sm:h-[650px]">
            <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=85"
                alt="School campus exterior"
                fill
                sizes="100vw"
                className="object-cover"
                priority
                />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10291f]/90 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 max-w-2xl p-7 sm:p-12">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D8B879]">
                Our Campus
              </p>

              <h2 className="mt-4 text-4xl font-medium text-white sm:text-6xl">
                Space to learn.
                <br />
                <span className="font-serif italic">Space to grow.</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/70">
                Explore an environment designed to give students room to
                learn, play, create and discover.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}