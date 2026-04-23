import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import LeafCluster from "../components/three/LeafCluster";
import { coreValues, timeline, visionMission, brand } from "../data/content";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A kitchen in Medak,{" "}
            <span className="text-gradient-gold">fifteen years later.</span>
          </>
        }
        subtitle={`${brand.name} grew from a community kitchen serving 40 children in 2011 into a trust now active across 62 districts, still stubbornly refusing shortcuts.`}
        accent
      />

      {/* FOUNDING STORY TIMELINE */}
      <section className="container-page py-20">
        <div className="mb-14 max-w-2xl">
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
              Founding story
            </span>
            <h2 className="mt-3 font-display text-4xl text-ink-900 sm:text-5xl">
              Fifteen years, one story at a time.
            </h2>
          </SectionReveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-forest-500/25 sm:left-1/2" />
          <ul className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <SectionReveal
                as="li"
                key={item.year}
                delay={i * 70}
                className={`relative grid gap-6 pl-12 sm:grid-cols-2 sm:gap-10 sm:pl-0 ${
                  i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full border-2 border-cream-100 bg-gold-400 shadow-gold sm:left-1/2 sm:-translate-x-1/2 ${
                    "left-[0.65rem]"
                  }`}
                />
                <div className="sm:text-right sm:pr-12">
                  <span className="inline-block font-display text-3xl text-forest-600">
                    {item.year}
                  </span>
                </div>
                <div className="sm:pl-12">
                  <h3 className="font-display text-xl text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-ink-800/75">{item.text}</p>
                </div>
              </SectionReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CORE VALUES — hex grid */}
      <section className="bg-cream-50 py-24">
        <div className="container-page">
          <SectionReveal>
            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
                  Six values
                </span>
                <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink-900 sm:text-5xl">
                  What holds the work together.
                </h2>
              </div>
              <p className="max-w-md text-ink-800/75">
                These are what we test every decision against — from which
                village we enter next to which funder we accept.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-[28px] bg-cream-100 p-8 ring-1 ring-forest-500/10 transition-all hover:-translate-y-1 hover:shadow-tilt">
                  <span className="absolute -right-8 -top-8 h-36 w-36 rotate-12 rounded-[28px] bg-forest-500/5 transition-transform duration-500 group-hover:rotate-45" />
                  <span className="absolute -left-10 -bottom-10 h-28 w-28 -rotate-12 rounded-[24px] bg-gold-400/10 transition-transform duration-500 group-hover:rotate-0" />
                  <div className="relative">
                    <span className="font-display text-4xl text-forest-600/20">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-2xl text-ink-900">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-ink-800/75">{v.text}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION + 3D leaf scene */}
      <section className="container-page py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <LeafCluster className="h-[360px] w-full rounded-[36px] bg-gradient-to-br from-cream-50 to-cream-200 shadow-card ring-1 ring-forest-500/10" />
          </SectionReveal>

          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <SectionReveal delay={120}>
                <div className="h-full rounded-3xl bg-gradient-to-br from-forest-600 to-forest-800 p-8 text-cream-50 shadow-tilt">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
                    Vision
                  </span>
                  <p className="mt-4 font-display text-2xl leading-tight">
                    {visionMission.vision}
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={220}>
                <div className="h-full rounded-3xl bg-cream-50 p-8 shadow-card ring-1 ring-forest-500/15">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
                    Mission
                  </span>
                  <p className="mt-4 font-display text-2xl leading-tight text-ink-900">
                    {visionMission.mission}
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2030 GOALS */}
      <section className="bg-forest-800 py-24 text-cream-50">
        <div className="container-page">
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              Strategic goals · 2030
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl text-cream-50 sm:text-5xl">
              Where we're pointed — and accountable.
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visionMission.goals2030.map((g, i) => (
              <SectionReveal key={g} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-cream-100/10 bg-cream-50/5 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold-400/60 hover:bg-cream-50/8">
                  <span className="font-display text-5xl text-gold-300/30">
                    0{i + 1}
                  </span>
                  <p className="mt-4 text-lg text-cream-50">{g}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
