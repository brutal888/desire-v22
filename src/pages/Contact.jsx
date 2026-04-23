import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { brand } from "../data/content";

function Toast({ show, onClose }) {
  return (
    <div
      role="status"
      className={`fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-forest-800 px-6 py-3 text-sm font-medium text-cream-50 shadow-tilt ring-1 ring-gold-400/60 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
      onClick={onClose}
    >
      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gold-400" />
      Message received — we'll get back within 2 working days.
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [toast, setToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate network latency
    setTimeout(() => {
      setSubmitting(false);
      setToast(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setToast(false), 3800);
    }, 700);
  };

  const field =
    "w-full rounded-2xl border border-forest-500/15 bg-cream-50 px-4 py-3 text-ink-900 placeholder:text-ink-700/50 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say hello —{" "}
            <span className="text-gradient-gold">or come visit.</span>
          </>
        }
        subtitle="Whether you're a potential partner, a journalist, a would-be volunteer, or just curious — the door is genuinely open."
      />

      <section className="container-page pb-28 pt-4">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* INFO CARD */}
          <SectionReveal className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 p-8 text-cream-50 shadow-tilt">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold-400/20 blur-2xl" />
              <span className="relative text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
                Our office
              </span>
              <h2 className="relative mt-3 font-display text-3xl">
                {brand.name}
              </h2>
              <address className="relative mt-6 space-y-1 not-italic text-cream-100/85">
                <div>{brand.address.line2}</div>
                <div>{brand.address.city}</div>
                <div>{brand.address.country}</div>
              </address>

              <ul className="relative mt-8 space-y-4 text-sm">
                <li>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300">
                    Email
                  </div>
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-lg hover:text-gold-300"
                  >
                    {brand.email}
                  </a>
                </li>
                <li>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300">
                    Phone
                  </div>
                  <a
                    href={`tel:${brand.phone.replace(/\s+/g, "")}`}
                    className="text-lg hover:text-gold-300"
                  >
                    {brand.phone}
                  </a>
                </li>
                <li>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300">
                    Hours
                  </div>
                  <div className="text-lg">{brand.hours}</div>
                </li>
              </ul>

              <div className="relative mt-8 border-t border-cream-100/15 pt-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300">
                  Social
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {Object.entries(brand.social).map(([k, v]) => (
                    <a
                      key={k}
                      href={v}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-cream-100/20 px-3 py-1.5 capitalize text-cream-100/85 transition-colors hover:border-gold-400 hover:text-gold-300"
                    >
                      {k}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* FORM */}
          <SectionReveal className="lg:col-span-7" delay={150}>
            <form
              onSubmit={onSubmit}
              className="relative flex h-full flex-col gap-4 rounded-3xl bg-cream-50 p-8 shadow-card ring-1 ring-forest-500/10"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
                  Send us a note
                </span>
                <h2 className="mt-3 font-display text-3xl text-ink-900">
                  Let's start a conversation.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/70">
                    Name
                  </span>
                  <input
                    className={field}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/70">
                    Email
                  </span>
                  <input
                    type="email"
                    className={field}
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/70">
                  Subject
                </span>
                <input
                  className={field}
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Partnership · Press · Volunteering…"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/70">
                  Message
                </span>
                <textarea
                  className={`${field} min-h-[140px] resize-y`}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you have in mind…"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest-500 px-6 py-3.5 text-sm font-semibold text-cream-50 shadow-card transition-all hover:-translate-y-0.5 hover:bg-forest-600 hover:shadow-tilt disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
                {!submitting && (
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>

              <p className="text-xs text-ink-700/55">
                This is a demo form — submissions are not yet wired to email.
                For urgent queries, write directly to{" "}
                <a href={`mailto:${brand.email}`} className="text-forest-700 underline">
                  {brand.email}
                </a>
                .
              </p>
            </form>
          </SectionReveal>
        </div>

        {/* MAP */}
        <SectionReveal>
          <div className="mt-14 overflow-hidden rounded-3xl bg-cream-50 shadow-card ring-1 ring-forest-500/10">
            <div className="relative h-[360px] w-full bg-cream-200">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(45,106,79,0.18),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(212,162,76,0.22),transparent_55%)]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(transparent_29px,rgba(45,106,79,0.12)_30px),linear-gradient(90deg,transparent_29px,rgba(45,106,79,0.12)_30px)] bg-[length:30px_30px]" />
              <div className="relative flex h-full items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="relative">
                    <span className="absolute -inset-4 animate-pulse-soft rounded-full bg-gold-400/30 blur-md" />
                    <span className="relative grid h-14 w-14 place-items-center rounded-full bg-forest-600 text-cream-50 shadow-tilt">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    </span>
                  </div>
                  <div className="rounded-full bg-cream-50/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-forest-700 shadow-card">
                    Hyderabad · HQ
                  </div>
                  <p className="max-w-sm text-sm text-ink-700/70">
                    Embedded map placeholder — swap for Google Maps or
                    Mapbox when deploying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <Toast show={toast} onClose={() => setToast(false)} />
    </>
  );
}
