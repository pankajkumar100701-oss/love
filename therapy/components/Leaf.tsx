export default function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className={className}>
      <path
        d="M100 190C100 190 20 140 20 80C20 40 55 10 100 10C145 10 180 40 180 80C180 140 100 190 100 190Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path d="M100 185V30" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      {[50, 75, 100, 125, 150].map((y) => (
        <g key={y} stroke="currentColor" strokeWidth="1.5" opacity="0.4">
          <path d={`M100 ${y + 20}L${60 + y / 10} ${y}`} />
          <path d={`M100 ${y + 20}L${140 - y / 10} ${y}`} />
        </g>
      ))}
    </svg>
  );
}
