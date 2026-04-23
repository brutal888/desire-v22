import { useEffect, useRef, useState } from "react";
import useCountUp, { formatCompact } from "../hooks/useCountUp";

export default function Counter({
  value,
  label,
  suffix = "",
  color = "forest",
  format = "compact",
  variant = "light",
}) {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const count = useCountUp(value, { enabled: inView, duration: 2000 });
  const display =
    format === "compact" ? formatCompact(count) : count.toLocaleString();

  const numberClass =
    color === "gold"
      ? "text-gold-400"
      : color === "cream"
      ? "text-cream-100"
      : "text-forest-500";

  const isDark = variant === "dark";
  const wrapper = isDark
    ? "bg-cream-50/5 ring-cream-100/10 text-cream-100"
    : "bg-cream-50/70 ring-forest-500/10 text-ink-700";

  const numberDark = color === "gold" ? "text-gold-300" : "text-cream-50";

  return (
    <div
      ref={wrapRef}
      className={`flex h-full flex-col items-start gap-2 rounded-2xl p-6 shadow-card ring-1 backdrop-blur-sm ${wrapper}`}
    >
      <div
        className={`font-display text-4xl sm:text-5xl font-semibold tracking-tight ${
          isDark ? numberDark : numberClass
        }`}
      >
        {display}
        {suffix}
      </div>
      <div
        className={`text-xs sm:text-sm font-medium uppercase tracking-[0.2em] ${
          isDark ? "text-cream-100/70" : "text-ink-700/80"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
