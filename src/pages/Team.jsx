import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import TiltCard from "../components/TiltCard";
import Counter from "../components/Counter";
import { team, fieldForce } from "../data/content";

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={
          <>
            The people who keep the{" "}
            <span className="text-gradient-gold">promises.</span>
          </>
        }
        subtitle="Half the board is women from the communities we serve. 72% of our field force, too. Leadership is not an imported layer — it grew out of the work."
      />

      <section className="container-page pb-20 pt-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <SectionReveal key={m.name} delay={(i % 3) * 90}>
              <TiltCard
                tiltMax={8}
                className="group h-full overflow-hidden rounded-3xl bg-cream-50 shadow-card ring-1 ring-forest-500/10 hover:shadow-tilt"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/0 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-cream-50">
                    <h3 className="font-display text-2xl">{m.name}</h3>
                    <p className="mt-1 text-sm text-cream-100/85">{m.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-ink-800/75">{m.bio}</p>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* FIELD FORCE + ORG STRUCTURE */}
      <section className="bg-forest-800 py-24 text-cream-50">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <SectionReveal className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
                Field force
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Change is done by people, close to the problem.
              </h2>
              <p className="mt-6 max-w-md text-cream-100/80">
                Beyond the leadership team, our work is held by the field
                force: village coordinators, master trainers, green-cell leads,
                and community volunteers — most of them recruited from the
                villages themselves.
              </p>
            </SectionReveal>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {fieldForce.map((c, i) => (
                  <SectionReveal key={c.label} delay={i * 80}>
                    <Counter
                      value={c.value}
                      label={c.label}
                      variant="dark"
                      color="gold"
                      format="plain"
                    />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Org structure visual */}
          <SectionReveal>
            <div className="mt-16 rounded-[32px] border border-cream-100/10 bg-cream-50/5 p-8 backdrop-blur-sm">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex flex-col items-center rounded-2xl bg-forest-500/40 px-6 py-4 ring-1 ring-gold-400/40">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-300">
                    Board & Trustees
                  </span>
                  <span className="font-display text-lg text-cream-50">
                    Seven members · 50% women · 30% beneficiary-community
                  </span>
                </div>
              </div>
              <div className="mx-auto my-6 h-10 w-px bg-cream-100/20" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Women's Programs",
                  "Green Programs",
                  "Rural Livelihoods",
                  "Welfare & Response",
                ].map((b, i) => (
                  <div
                    key={b}
                    className="rounded-2xl bg-cream-50/5 p-5 text-center ring-1 ring-cream-100/10"
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-gold-300">
                      Division {i + 1}
                    </span>
                    <div className="mt-2 font-display text-lg text-cream-50">
                      {b}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-auto my-6 h-10 w-px bg-cream-100/20" />
              <p className="text-center text-sm text-cream-100/70">
                Each division is staffed by district coordinators, trainers,
                and community volunteers working together on the ground.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
