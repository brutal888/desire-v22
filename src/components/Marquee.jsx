export default function Marquee({ items, className = "" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="marquee-track py-4">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-ink-700/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="font-display text-lg">{item}</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-100 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-100 to-transparent" />
    </div>
  );
}
