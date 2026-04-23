import { useRef } from "react";

/**
 * Perspective-tilt card driven by mouse position.
 * Falls back gracefully — if JS is disabled, pure CSS hover from .tilt-card still applies.
 */
export default function TiltCard({
  as = "div",
  className = "",
  tiltMax = 10,
  scale = 1.02,
  glare = true,
  children,
  ...rest
}) {
  const Tag = as;
  const ref = useRef(null);
  const glareRef = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * tiltMax * 2;
    const ry = (x - 0.5) * tiltMax * 2;
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.35), transparent 55%)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    if (glareRef.current) glareRef.current.style.background = "transparent";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative will-change-transform transition-[transform,box-shadow] duration-300 ease-out [transform-style:preserve-3d] ${className}`}
      {...rest}
    >
      {children}
      {glare && (
        <span
          ref={glareRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
        />
      )}
    </Tag>
  );
}
