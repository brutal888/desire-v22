import { Link } from "react-router-dom";
import { brand, navLinks } from "../data/content";

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-cream-100/15 bg-cream-50/5 text-cream-100/80 transition-all hover:-translate-y-0.5 hover:border-gold-400/70 hover:bg-gold-400/10 hover:text-gold-300"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-forest-800 text-cream-100">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold-400 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-forest-500 blur-[140px]" />
      </div>

      <div className="container-page relative grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-cream-50/10">
              <img src="/logo.png" alt="" className="h-8 w-8 object-contain" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl text-cream-50">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300">
                Established {brand.established}
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-md text-cream-100/70">{brand.longTagline}</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex max-w-md items-center overflow-hidden rounded-full bg-cream-50/8 ring-1 ring-cream-100/15 focus-within:ring-gold-400/60"
          >
            <input
              type="email"
              required
              placeholder="Your email for field updates"
              className="w-full bg-transparent px-5 py-3 text-sm text-cream-50 placeholder:text-cream-100/50 focus:outline-none"
            />
            <button
              type="submit"
              className="m-1 rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-forest-900 transition-colors hover:bg-gold-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream-50">Explore</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-cream-100/75 transition-colors hover:text-gold-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream-50">Reach us</h4>
          <ul className="mt-5 space-y-2.5 text-sm text-cream-100/75">
            <li>{brand.address.line2}</li>
            <li>{brand.address.city}</li>
            <li>{brand.address.country}</li>
            <li className="pt-2">
              <a href={`mailto:${brand.email}`} className="hover:text-gold-300">
                {brand.email}
              </a>
            </li>
            <li>
              <a href={`tel:${brand.phone.replace(/\s+/g, "")}`} className="hover:text-gold-300">
                {brand.phone}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <SocialIcon href={brand.social.instagram} label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            </SocialIcon>
            <SocialIcon href={brand.social.facebook} label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.5-2 2-2h2V2h-3c-3.2 0-5 1.8-5 5v3H6v4h3v8h4Z"/></svg>
            </SocialIcon>
            <SocialIcon href={brand.social.linkedin} label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-2 6h4v12H2V10Zm7 0h4v2c1-1.3 2.7-2.3 4.7-2.3 3.3 0 4.3 2.2 4.3 5.3V22h-4v-6c0-1.6-.6-2.7-2.1-2.7s-2.4 1-2.4 2.7V22H9V10Z"/></svg>
            </SocialIcon>
            <SocialIcon href={brand.social.youtube} label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.4-5.2c-.2-.9-.9-1.7-1.9-1.9C18.8 4.5 12 4.5 12 4.5s-6.8 0-8.7.4c-1 .2-1.7 1-1.9 1.9C1 8.5 1 12 1 12s0 3.5.4 5.2c.2.9.9 1.7 1.9 1.9 1.9.4 8.7.4 8.7.4s6.8 0 8.7-.4c1-.2 1.7-1 1.9-1.9.4-1.7.4-5.2.4-5.2Zm-13.5 3.5v-7L16 12l-6.5 3.5Z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream-100/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-cream-100/60 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {brand.name}. A not-for-profit trust registered under the Indian Trusts Act, 1882.
          </span>
          <span className="tracking-widest uppercase">
            Empowering Lives · Restoring Earth
          </span>
        </div>
      </div>
    </footer>
  );
}
