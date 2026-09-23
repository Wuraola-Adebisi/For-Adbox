import { useEffect, useState } from 'react'

// TODO: confirm the exact wording and order against the Figma prototype interaction; these three
// are what's legible across the frames you sent.
const labels = ['Move with them', 'Reach people', 'Build visibility']

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex h-8 shrink-0 items-center gap-2 rounded-full border border-pill-line bg-pill px-4 text-sm font-medium whitespace-nowrap tracking-[0.08em] text-pill-fg">
      <span aria-hidden="true" className="size-[5px] shrink-0 rounded-full bg-current" />
      {children}
      <span aria-hidden="true" className="size-[5px] shrink-0 rounded-full bg-current" />
    </span>
  )
}

/**
 * A horizontal ticker of pill chips that auto-scrolls, so neighbouring labels peek in from the
 * edges the way they do in the Figma prototype's transition. Falls back to a single static pill
 * for reduced-motion.
 */
export function HeroPill() {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <Pill>Build visibility</Pill>
  }

  // Render the sequence twice back to back so the marquee can loop seamlessly at -50%.
  const track = [...labels, ...labels]

  return (
    <div className="relative w-full max-w-[360px] overflow-hidden mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="animate-[hero-pill-marquee_9s_linear_infinite] flex w-max items-center gap-3">
        {track.map((label, i) => (
          <Pill key={`${label}-${i}`}>{label}</Pill>
        ))}
      </div>
    </div>
  )
}
