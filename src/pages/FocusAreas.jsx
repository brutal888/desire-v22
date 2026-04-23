import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import FlipCard from "../components/FlipCard";
import { pillars } from "../data/content";

function Front({ pillar }) {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-cream-50 p-8 ring-1 ring-forest-500/10 shadow-card"
      style={{
        background: `linear-gradient(145deg, #faf7f0 0%, ${pillar.accent}22 100%)`,
      }}
    >
      <div>
        <div
          className="grid h-16 w-16 place-items-center rounded-2xl font-display text-4xl"
          style={{ backgroundColor: `${pillar.accent}29`, color: pillar.accent }}
        >
          {pillar.icon}
        </div>
        <h3 className="mt-6 font-display text-3xl text-ink-900">
          {pillar.title}
        </h3>
        <p className="mt-3 max-w-xs text-ink-800/75">{pillar.subtitle}</p>
      </div>
      <div className="flex items-center justify-between border-t border-forest-500/10 pt-5 text-xs uppercase tracking-[0.25em] text-forest-600">
        <span>Hover to reveal depth</span>
        <span>→</span>
      </div>
    </div>
  );
}

function Back({ pillar }) {
  return (
    <div
      className="flex h-full w-full flex-col justify-between rounded-3xl p-8 text-cream-50 shadow-tilt"
      style={{
        background: `linear-gradient(160deg, ${pillar.accent} 0%, #1b4131 100%)`,
      }}
    >
      <div>
        <h3 className="font-display text-2xl">{pillar.title}</h3>
        <p className="mt-3 text-sm text-cream-100/85">{pillar.description}</p>
        <ul className="mt-5 space-y-2 text-sm">
          {pillar.subInitiatives.map((s) => (
            <li key={s} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-cream-100" />
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-cream-100/20 pt-4 text-center">
        {pillar.reach.map((r) => (
          <div key={r.label}>
            <div className="font-display text-lg text-gold-200">{r.value}</div>
            <div className="mt-1 text-[10px] uppercase tracking-wide text-cream-100/70">
              {r.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FocusAreas() {
  return (
    <>
      <PageHero
        eyebrow="Four focus areas"
        title={
          <>
            Roots that feed each other —{" "}
            <span className="text-gradient-gold">and the land beneath.</span>
          </>
        }
        subtitle="Four interlocking bodies of work. A livelihood without a forest collapses. A forest without a livelihood is abandoned. We refuse that trade-off."
        accent
      />

      <section className="container-page pb-24 pt-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {pillars.map((p, i) => (
            <SectionReveal key={p.id} delay={i * 100}>
              <FlipCard
                front={<Front pillar={p} />}
                back={<Back pillar={p} />}
                height="h-[28rem]"
              />
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-50 py-20">
        <div className="container-page">
          <SectionReveal>
            <h2 className="mx-auto max-w-3xl text-center font-display text-3xl text-ink-900 sm:text-4xl">
              Each pillar ships with its own{" "}
              <span className="text-gradient-forest">ecological ledger.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-800/75">
              Economic uplift cannot come at environmental cost. Every livelihood
              program we run reports both: jobs created and carbon, water,
              biodiversity restored.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
