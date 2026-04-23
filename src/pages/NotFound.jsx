import { Link } from "react-router-dom";
import SectionReveal from "../components/SectionReveal";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-200">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold-200 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-96 w-96 rounded-full bg-forest-200/40 blur-[160px]" />

      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <SectionReveal>
          <span className="font-display text-[10rem] leading-none text-forest-600/20">
            404
          </span>
        </SectionReveal>
        <SectionReveal delay={120}>
          <h1 className="mt-2 font-display text-4xl text-ink-900 sm:text-5xl">
            This path has grown over.
          </h1>
        </SectionReveal>
        <SectionReveal delay={220}>
          <p className="mt-4 max-w-md text-ink-800/75">
            The page you were looking for has moved, or maybe it was never here
            — either way, let's get you back to something useful.
          </p>
        </SectionReveal>
        <SectionReveal delay={320}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="rounded-full bg-forest-500 px-6 py-3 text-sm font-semibold text-cream-50 shadow-card transition-all hover:-translate-y-0.5 hover:bg-forest-600 hover:shadow-tilt"
            >
              Back home
            </Link>
            <Link
              to="/focus-areas"
              className="rounded-full border border-forest-500/30 px-6 py-3 text-sm font-semibold text-forest-700 transition-colors hover:border-forest-500 hover:bg-cream-50"
            >
              Explore our focus
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
