import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks, brand } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const closeDrawer = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-100/80 backdrop-blur-md shadow-[0_4px_24px_-16px_rgba(11,27,20,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-forest-500 shadow-gold">
            <img src="/logo.png" alt="" className="h-8 w-8 object-contain" />
            <span className="absolute inset-0 rounded-full ring-1 ring-gold-400/50" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-forest-700">
              {brand.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-500">
              Est. {brand.established}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `group relative px-3 py-2 text-sm font-medium tracking-wide text-ink-800/85 transition-colors hover:text-forest-600 ${
                  isActive ? "text-forest-700" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute inset-x-2 -bottom-0.5 h-[2px] origin-center rounded-full bg-gradient-to-r from-gold-400 to-forest-500 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-4 rounded-full bg-forest-500 px-4 py-2 text-sm font-semibold text-cream-50 shadow-card transition-all hover:-translate-y-0.5 hover:bg-forest-600 hover:shadow-tilt"
          >
            Partner with us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full bg-cream-50/70 text-forest-700 ring-1 ring-forest-500/15 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-forest-900/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-8 bg-cream-50 px-8 pb-10 pt-24 shadow-tilt transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col divide-y divide-forest-500/10">
            {navLinks.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `group flex items-center justify-between py-4 font-display text-2xl text-ink-900 transition-colors ${
                    isActive ? "text-forest-600" : ""
                  }`
                }
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                <span>{l.label}</span>
                <span className="text-gold-400 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={closeDrawer}
            className="mt-auto inline-flex items-center justify-center rounded-full bg-forest-500 px-6 py-3 text-sm font-semibold text-cream-50 shadow-card transition-all hover:bg-forest-600"
          >
            Partner with us
          </Link>
        </aside>
      </div>
    </header>
  );
}
