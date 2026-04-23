export default function FlipCard({
  front,
  back,
  height = "h-[26rem]",
  className = "",
}) {
  return (
    <div
      tabIndex={0}
      className={`flip-card ${height} w-full focus:outline-none ${className}`}
    >
      <div className="flip-card-inner h-full w-full">
        <div className="flip-card-face flip-card-front rounded-3xl">{front}</div>
        <div className="flip-card-face flip-card-back rounded-3xl">{back}</div>
      </div>
    </div>
  );
}
