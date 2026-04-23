import { useEffect, useRef, useState } from "react";

export default function useCountUp(target, { duration = 1800, enabled = true } = {}) {
  const [value, setValue] = useState(0);
  const startTs = useRef(null);
  const frame = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    startTs.current = null;
    const tick = (ts) => {
      if (!startTs.current) startTs.current = ts;
      const elapsed = ts - startTs.current;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [target, duration, enabled]);

  return value;
}

export function formatCompact(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) {
    const formatted = (n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1);
    if (parseFloat(formatted) >= 1000) return `${(n / 1_000_000).toFixed(1)}M`;
    return `${formatted}K`;
  }
  return n.toLocaleString();
}
