import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import Counter from "../components/Counter";
import Marquee from "../components/Marquee";
import ImpactGlobe from "../components/three/ImpactGlobe";
import { extendedCounters, timeline, testimonials, awards } from "../data/content";

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title={
          <>
            What fifteen years look like —{" "}
            <span className="text-gradient-gold">measured, audited, open.</span>
          </>
        }
        subtitle="Impact is a number only when you can defend it. Every figure below is audited annually by an independent third party."
        accent
      />

      {/* GLOBE + COUNTERS */}
      <section className="container-page py-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <div className="relative aspect-square rounded-[32px] bg-forest-800 shadow-tilt">
              <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-gold-400/20 to-transparent" />
              <ImpactGlobe className="h-full w-full" />
              <span className="absolute bottom-5 left-5 rounded-full bg-cream-50/10 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-cream-50/80 backdrop-blur">
                62 districts · 4 states · 1,840 villages
              </span>
            </div>
          </SectionReveal>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              {extendedCounters.map((c, i) => (
                <SectionReveal key={c.label} delay={(i % 4) * 80}>
                  <Counter {...c} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section className="bg-cream-50 py-24">
        <div className="container-page">
          <SectionReveal>
            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
                  Milestone timeline
                </span>
                <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink-900 sm:text-5xl">
                  Fifteen years in fifteen lines.
                </h2>
              </div>
            </div>
          </SectionReveal>
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-px bg-forest-500/20" />
            <ul className="flex flex-col gap-6">
              {timeline.map((t, i) => (
                <SectionReveal
                  as="li"
                  key={t.year}
                  delay={i * 60}
                  className="relative flex gap-6 pl-14"
                >
                  <span className="absolute left-[0.9rem] top-2 h-3 w-3 rounded-full border-2 border-cream-50 bg-forest-500" />
                  <span className="absolute left-[1.2rem] top-5 h-full w-px bg-transparent" />
                  <div className="flex w-full flex-col gap-1 rounded-2xl bg-cream-100 p-5 ring-1 ring-forest-500/10">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-xl text-forest-600">
                        {t.year}
                      </span>
                      <span className="text-xs uppercase tracking-[0.25em] text-gold-500">
                        {t.title}
                      </span>
                    </div>
                    <p className="text-ink-800/75">{t.text}</p>
                  </div>
                </SectionReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-24">
        <SectionReveal>
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
              Voices from the field
            </span>
            <h2 className="mt-3 font-display text-4xl text-ink-900 sm:text-5xl">
              The stories that keep us honest.
            </h2>
          </div>
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 120}>
              <blockquote className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-cream-50 p-8 shadow-card ring-1 ring-forest-500/10 transition-all hover:-translate-y-1 hover:shadow-tilt">
                <span className="pointer-events-none absolute -right-4 -top-6 font-display text-[9rem] leading-none text-gold-400/20">
                  “
                </span>
                <p className="relative font-display text-xl leading-snug text-ink-900">
                  {t.quote}
                </p>
                <footer className="relative mt-6 border-t border-forest-500/10 pt-4 text-sm">
                  <div className="font-semibold text-forest-700">{t.name}</div>
                  <div className="text-ink-700/65">{t.role}</div>
                </footer>
              </blockquote>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* AWARDS STRIP */}
      <section className="border-y border-forest-500/10 bg-cream-50 py-10">
        <div className="container-page">
          <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-forest-600/80">
            Awards & recognition
          </p>
          <Marquee items={awards} />
        </div>
      </section>
    </>
  );
}
