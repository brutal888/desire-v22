import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import TiltCard from "../components/TiltCard";
import { programs, pillars } from "../data/content";

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={
          <>
            Nine programs,{" "}
            <span className="text-gradient-gold">four pillars.</span>
          </>
        }
        subtitle="Every program is built with the community, measured on the community's terms, and funded for a minimum of three years."
      />

      <section className="container-page space-y-24 pb-28">
        {programs.map((group, gi) => {
          const pillar = pillars.find((p) => p.id === group.pillar);
          return (
            <div key={group.pillar} className="relative">
              <SectionReveal>
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]"
                      style={{
                        backgroundColor: `${pillar?.accent}1A`,
                        color: pillar?.accent,
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: pillar?.accent }}
                      />
                      Pillar 0{gi + 1} — {group.pillarLabel}
                    </span>
                    <h2 className="mt-4 max-w-2xl font-display text-3xl text-ink-900 sm:text-4xl">
                      {pillar?.subtitle}
                    </h2>
                  </div>
                </div>
              </SectionReveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {group.items.map((prog, i) => (
                  <SectionReveal key={prog.title} delay={i * 100}>
                    <TiltCard
                      tiltMax={6}
                      className="group h-full rounded-3xl bg-cream-50 p-7 shadow-card ring-1 ring-forest-500/10 hover:shadow-tilt"
                    >
                      <span className="font-display text-5xl text-forest-600/15">
                        0{i + 1}
                      </span>
                      <h3 className="mt-2 font-display text-xl text-ink-900">
                        {prog.title}
                      </h3>
                      <p className="mt-3 text-sm text-ink-800/75">
                        {prog.objective}
                      </p>
                      <dl className="mt-5 space-y-2 border-t border-forest-500/10 pt-4 text-sm">
                        <div className="flex justify-between gap-4">
                          <dt className="text-ink-700/60 uppercase text-[10px] tracking-[0.2em]">
                            Reach
                          </dt>
                          <dd className="text-ink-900">{prog.beneficiaries}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-ink-700/60 uppercase text-[10px] tracking-[0.2em]">
                            Where
                          </dt>
                          <dd className="text-right text-ink-900">
                            {prog.locations}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-ink-700/60 uppercase text-[10px] tracking-[0.2em]">
                            Duration
                          </dt>
                          <dd className="text-ink-900">{prog.duration}</dd>
                        </div>
                      </dl>
                    </TiltCard>
                  </SectionReveal>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
