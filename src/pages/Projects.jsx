import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import TiltCard from "../components/TiltCard";
import { projects, projectFilters, pillars } from "../data/content";

const focusFilters = [{ id: "all", label: "All focus" }].concat(
  pillars.map((p) => ({ id: p.id, label: p.title }))
);

const statusStyles = {
  Active: "bg-forest-500/15 text-forest-700",
  Completed: "bg-gold-400/20 text-gold-600",
  Upcoming: "bg-cream-300 text-ink-800",
};

export default function Projects() {
  const [status, setStatus] = useState("all");
  const [focus, setFocus] = useState("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const s = status === "all" || p.status === status;
      const f = focus === "all" || p.focus === focus;
      return s && f;
    });
  }, [status, focus]);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Work on the ground —{" "}
            <span className="text-gradient-gold">district by district.</span>
          </>
        }
        subtitle="Nine projects live across our four focus areas. Filter by status or pillar to find what's running where."
      />

      {/* FILTERS */}
      <section className="container-page -mt-10 mb-10">
        <SectionReveal>
          <div className="flex flex-col gap-4 rounded-3xl bg-cream-50 p-5 shadow-card ring-1 ring-forest-500/10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
                Status
              </span>
              {projectFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setStatus(f.id)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    status === f.id
                      ? "bg-forest-500 text-cream-50 shadow-card"
                      : "bg-cream-100 text-ink-800/70 hover:bg-cream-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
                Focus
              </span>
              {focusFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFocus(f.id)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    focus === f.id
                      ? "bg-forest-500 text-cream-50 shadow-card"
                      : "bg-cream-100 text-ink-800/70 hover:bg-cream-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="container-page pb-28">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-ink-800/70">
            No projects match those filters yet — try widening your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <SectionReveal key={p.id} delay={(i % 3) * 80}>
                <TiltCard className="group h-full overflow-hidden rounded-3xl bg-cream-50 shadow-card ring-1 ring-forest-500/10 hover:shadow-tilt">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] ${
                        statusStyles[p.status] || ""
                      }`}
                    >
                      {p.status}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-600">
                      {p.year}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <span className="text-xs uppercase tracking-[0.25em] text-gold-500">
                      {pillars.find((pp) => pp.id === p.focus)?.title}
                    </span>
                    <h3 className="font-display text-xl text-ink-900">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-800/70 line-clamp-3">
                      {p.summary}
                    </p>
                    <div className="mt-2 flex items-center justify-between border-t border-forest-500/10 pt-4 text-xs text-ink-700/70">
                      <span>{p.location}</span>
                      <span className="text-forest-600 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
