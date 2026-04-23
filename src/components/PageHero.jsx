import SectionReveal from "./SectionReveal";

export default function PageHero({ eyebrow, title, subtitle, accent = null }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-200 to-cream-100 pb-24 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-grain" />
      {accent && (
        <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-gold-200 blur-[140px]" />
      )}

      <div className="container-page relative">
        <SectionReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-500/20 bg-cream-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {eyebrow}
          </span>
        </SectionReveal>
        <SectionReveal delay={120}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ink-900 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </SectionReveal>
        {subtitle && (
          <SectionReveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg text-ink-800/80 sm:text-xl">
              {subtitle}
            </p>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
