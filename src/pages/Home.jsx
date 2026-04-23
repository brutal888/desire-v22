import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ParticleField from "../components/three/ParticleField";
import SectionReveal from "../components/SectionReveal";
import Counter from "../components/Counter";
import TiltCard from "../components/TiltCard";
import Marquee from "../components/Marquee";
import { pillars, impactCounters, partners, projects, brand } from "../data/content";

const rotatingWords = ["Women.", "Forests.", "Livelihoods.", "Dignity."];

function RotatingTagline() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % rotatingWords.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block h-[1.1em] min-w-[6.5ch] overflow-hidden align-middle">
      <span
        className="absolute inset-0 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ transform: `translateY(-${idx * 1.1}em)` }}
      >
        {rotatingWords.map((w) => (
          <span
            key={w}
            className="block h-[1.1em] leading-[1.1] font-display text-gradient-forest"
          >
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-100 pb-28">
        <ParticleField className="!inset-0 !absolute opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-hero-fade" />
        <div className="container-page relative grid min-h-[88vh] grid-cols-1 items-center gap-12 pt-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-forest-500/25 bg-cream-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-forest-600 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                Est. {brand.established} · A grassroots trust
              </span>
            </SectionReveal>
            <SectionReveal delay={120}>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink-900 sm:text-6xl lg:text-[5.25rem]">
                We rise by{" "}
                <span className="text-gradient-gold">lifting</span>
                <br />
                <RotatingTagline />
              </h1>
            </SectionReveal>
            <SectionReveal delay={220}>
              <p className="mt-6 max-w-xl text-lg text-ink-800/80 sm:text-xl">
                {brand.longTagline}
              </p>
            </SectionReveal>
            <SectionReveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/focus-areas"
                  className="group inline-flex items-center gap-2 rounded-full bg-forest-500 px-6 py-3 text-sm font-semibold text-cream-50 shadow-card transition-all hover:-translate-y-0.5 hover:bg-forest-600 hover:shadow-tilt"
                >
                  Explore our focus
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-2 rounded-full border border-forest-500/30 px-6 py-3 text-sm font-semibold text-forest-700 transition-colors hover:border-forest-500 hover:bg-cream-50/70"
                >
                  See our impact
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={420}>
              <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-ink-800/70">
                <span>15 years in the field</span>
                <span className="h-px w-10 bg-forest-500/30" />
                <span>62 districts · 4 pillars</span>
              </div>
            </SectionReveal>
          </div>

          {/* Decorative right column — floating hexagon + stats */}
          <div className="relative lg:col-span-5">
            <SectionReveal delay={180}>
              <div className="relative mx-auto aspect-square max-w-md animate-float">
                <div className="absolute inset-4 rounded-[36px] border border-forest-500/15 bg-cream-50/30 backdrop-blur-sm" />
                <div className="absolute inset-8 rounded-[28px] border border-gold-400/30 bg-cream-50/50 backdrop-blur-md" />
                <div className="absolute inset-12 flex flex-col items-center justify-center gap-3 rounded-[22px] bg-cream-50/85 text-center shadow-tilt ring-1 ring-forest-500/15">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-500">
                    Since {brand.established}
                  </span>
                  <span className="font-display text-5xl text-forest-600">
                    3.6M+
                  </span>
                  <span className="max-w-[14rem] text-sm text-ink-800/70">
                    lives touched across rural India by the Desire Foundation community
                  </span>
                  <span className="mt-2 flex items-center gap-1 text-xs uppercase tracking-[0.25em] text-forest-500">
                    <span className="h-1 w-1 rounded-full bg-gold-400" />
                    Audited · Open data
                  </span>
                </div>
                {/* orbiting dots */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400 shadow-gold animate-pulse-soft"
                    style={{
                      transform: `rotate(${(i * 360) / 6}deg) translate(200px) rotate(-${
                        (i * 360) / 6
                      }deg)`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* PILLAR GRID */}
      <section className="container-page relative py-24">
        <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
              Four pillars
            </span>
            <h2 className="mt-3 max-w-xl font-display text-4xl text-ink-900 sm:text-5xl">
              Regenerative work, held up by four roots.
            </h2>
          </SectionReveal>
          <SectionReveal delay={140}>
            <p className="max-w-md text-ink-800/75">
              Every program we run sits under one of these pillars — and is
              measured against its own social and ecological ledger.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <SectionReveal key={p.id} delay={i * 100}>
              <TiltCard className="group h-full rounded-3xl bg-cream-50 p-8 shadow-card ring-1 ring-forest-500/10 hover:shadow-tilt">
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl font-display text-3xl"
                  style={{
                    backgroundColor: `${p.accent}22`,
                    color: p.accent,
                  }}
                >
                  {p.icon}
                </div>
                <h3 className="font-display text-2xl text-ink-900">{p.title}</h3>
                <p className="mt-3 text-sm text-ink-800/70">{p.subtitle}</p>
                <div className="mt-6 flex items-center justify-between border-t border-forest-500/10 pt-4 text-xs uppercase tracking-[0.2em] text-forest-600/80">
                  <span>Reach · {p.reach[0].value}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* IMPACT COUNTERS */}
      <section className="relative overflow-hidden bg-forest-800 py-24 text-cream-50">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute -top-32 left-10 h-96 w-96 rounded-full bg-gold-400 blur-[160px]" />
          <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-forest-400 blur-[160px]" />
        </div>

        <div className="container-page relative">
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              Live impact
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl text-cream-50 sm:text-5xl">
              Numbers from the field, updated every quarter.
            </h2>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {impactCounters.map((c, i) => (
              <SectionReveal key={c.label} delay={i * 90} className="h-full">
                <Counter {...c} variant="dark" />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STRIP + FEATURED PROJECTS */}
      <section className="container-page py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
              Our mission
            </span>
            <h2 className="mt-3 font-display text-4xl text-ink-900 sm:text-5xl">
              Co-creating change — not parachuting it in.
            </h2>
            <p className="mt-6 max-w-md text-ink-800/75">
              We live in the districts we work in. Our programs are designed
              with — not for — the women, farmers, and families they serve.
              Economic uplift without ecological cost. Dignity before deliverables.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-500"
            >
              Read our story <span>→</span>
            </Link>
          </SectionReveal>

          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {featured.map((p, i) => (
                <SectionReveal key={p.id} delay={i * 120}>
                  <TiltCard className="group h-full overflow-hidden rounded-3xl bg-cream-50 shadow-card ring-1 ring-forest-500/10 hover:shadow-tilt">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-600">
                        {p.status}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl text-ink-900">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-800/70 line-clamp-3">
                        {p.summary}
                      </p>
                    </div>
                  </TiltCard>
                </SectionReveal>
              ))}
            </div>
            <div className="mt-6 text-right">
              <Link
                to="/projects"
                className="text-sm font-semibold text-forest-700 hover:text-forest-500"
              >
                See all projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <section className="border-y border-forest-500/10 bg-cream-50/60 py-10">
        <div className="container-page">
          <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-forest-600/80">
            In partnership with
          </p>
          <Marquee items={partners} />
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 px-8 py-16 text-cream-50 shadow-tilt sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-gold-300/30 blur-[120px]" />
            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
                  Partner with Desire
                </span>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                  Fund a district. Sponsor a forest. Adopt a guild.
                </h2>
                <p className="mt-5 max-w-xl text-cream-100/80">
                  We work with CSR teams, foundations, and individuals looking
                  for deep, measurable, multi-year partnerships — not one-off
                  cheques.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-sm font-semibold text-forest-900 shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-300"
                >
                  Start a conversation →
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
