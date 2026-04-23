import useReveal from "../hooks/useReveal";

export default function SectionReveal({
  as = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const { ref } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
