import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const ads = [
  { brand: 'Kora Mart', kind: 'Retail', place: 'Allen Avenue, Ikeja' },
  { brand: 'Mama Put Kitchen', kind: 'Food', place: 'Admiralty Way' },
  { brand: 'Zapp Pay', kind: 'Fintech', place: 'Victoria Island' },
  { brand: 'Sound Fest', kind: 'Events', place: 'Eko Atlantic' },
]

const screens = ['Left', 'Right', 'Rear']

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

const chip = 'absolute rounded-lg border border-white/15 bg-[#1e242e]/95 text-left shadow-lg backdrop-blur-sm'

type LinePoints = { x1: number; y1: number; x2: number; y2: number }

/**
 * Thin lines from two points on the box (approximated with invisible anchor markers, since the
 * box itself renders inside an iframe and its exact geometry isn't reachable from here) to the
 * bottom edge of the two upper chips. Measured live off the DOM so it holds at any size.
 */
function useConnectorLines(
  containerRef: React.RefObject<HTMLDivElement | null>,
  leftAnchorRef: React.RefObject<HTMLSpanElement | null>,
  rightAnchorRef: React.RefObject<HTMLSpanElement | null>,
  chip1Ref: React.RefObject<HTMLDivElement | null>,
  chip2Ref: React.RefObject<HTMLDivElement | null>,
) {
  const [lines, setLines] = useState<{ a: LinePoints; b: LinePoints } | null>(null)

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current
      const leftAnchor = leftAnchorRef.current
      const rightAnchor = rightAnchorRef.current
      const chip1 = chip1Ref.current
      const chip2 = chip2Ref.current
      if (!container || !leftAnchor || !rightAnchor || !chip1 || !chip2) return

      const base = container.getBoundingClientRect()
      const rel = (x: number, y: number) => ({ x: x - base.left, y: y - base.top })
      const pointOf = (el: Element) => {
        const r = el.getBoundingClientRect()
        return rel(r.left + r.width / 2, r.top + r.height / 2)
      }
      const bottomOf = (el: Element, fromRight: boolean) => {
        const r = el.getBoundingClientRect()
        return rel(fromRight ? r.right - 22 : r.left + 22, r.bottom)
      }

      const leftAnchorPoint = pointOf(leftAnchor)
      const rightAnchorPoint = pointOf(rightAnchor)
      const chip1Point = bottomOf(chip1, true)
      const chip2Point = bottomOf(chip2, false)

      setLines({
        a: { x1: chip1Point.x, y1: chip1Point.y, x2: leftAnchorPoint.x, y2: leftAnchorPoint.y },
        b: { x1: chip2Point.x, y1: chip2Point.y, x2: rightAnchorPoint.x, y2: rightAnchorPoint.y },
      })
    }

    measure()
    const onResize = () => measure()
    window.addEventListener('resize', onResize)
    const timer = window.setInterval(measure, 4000) // ad text changes width; keep lines attached
    return () => {
      window.removeEventListener('resize', onResize)
      window.clearInterval(timer)
    }
  }, [containerRef, leftAnchorRef, rightAnchorRef, chip1Ref, chip2Ref])

  return lines
}

export function HeroCarrier() {
  const reduced = usePrefersReducedMotion()
  const [adIndex, setAdIndex] = useState(0)
  const [views, setViews] = useState(3482)

  const containerRef = useRef<HTMLDivElement>(null)
  const leftAnchorRef = useRef<HTMLSpanElement>(null)
  const rightAnchorRef = useRef<HTMLSpanElement>(null)
  const chip1Ref = useRef<HTMLDivElement>(null)
  const chip2Ref = useRef<HTMLDivElement>(null)
  const lines = useConnectorLines(containerRef, leftAnchorRef, rightAnchorRef, chip1Ref, chip2Ref)

  useEffect(() => {
    if (reduced) return
    const adTimer = window.setInterval(() => setAdIndex((value) => (value + 1) % ads.length), 4000)
    const viewTimer = window.setInterval(() => setViews((value) => value + 1 + Math.floor(Math.random() * 9)), 1400)
    return () => {
      window.clearInterval(adTimer)
      window.clearInterval(viewTimer)
    }
  }, [reduced])

  const ad = ads[adIndex]

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Rotating 3D view of the AdBox carrier box with LED ad screens"
      className="relative aspect-[9/7] w-full max-w-[420px] sm:max-w-[520px] md:aspect-auto md:h-[480px] md:max-w-[640px]"
    >
      <iframe
        src="/carrier-360.html"
        title="AdBox carrier box, 3D view"
        aria-hidden="true"
        tabIndex={-1}
        scrolling="no"
        sandbox="allow-scripts"
        className="pointer-events-none absolute inset-0 h-full w-full border-0"
      />

      {/* Invisible markers approximating the box's top-left and top-right corners, so the
          connector lines below always land on the box regardless of container size. */}
      <span
        ref={leftAnchorRef}
        aria-hidden="true"
        className="absolute top-[35%] left-[37%] size-px"
      />
      <span
        ref={rightAnchorRef}
        aria-hidden="true"
        className="absolute top-[30%] left-[63%] size-px"
      />

      <div aria-hidden="true" className="hidden md:block">
        {lines && (
          <svg className="pointer-events-none absolute inset-0 size-full overflow-visible">
            {[lines.a, lines.b].map((l, i) => (
              <g key={i}>
                <line
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  stroke="#5b6b80"
                  strokeWidth="1"
                  opacity="0.55"
                />
                <circle
                  cx={l.x2}
                  cy={l.y2}
                  r="2"
                  fill="#5b6b80"
                  opacity="0.7"
                />
              </g>
            ))}
          </svg>
        )}

        <div
          ref={chip1Ref}
          className={`${chip} top-[13.5%] left-[8%] w-max min-w-[150px] px-3 py-2.5`}
        >
          <div className="flex items-center gap-1.5 text-[8px] font-semibold tracking-[0.06em] text-[#ff3b5c] uppercase">
            <span className="size-1 rounded-full bg-[#ff3b5c]" />
            Now playing
          </div>
          <div className="mt-1.5 flex items-baseline justify-between gap-2">
            <span className="text-[11px] font-bold whitespace-nowrap text-white">
              {ad.brand}
            </span>
            <span className="shrink-0 text-[8px] whitespace-nowrap text-[#8a96a8]">
              {ad.kind} · 5s spot
            </span>
          </div>
        </div>

        <div
          ref={chip2Ref}
          className={`${chip} top-[16.5%] right-[7%] w-[145px] px-3 py-2.5`}
        >
          <div className="text-[8px] text-[#8a96a8]">Views this hour</div>
          <div className="mt-0.5 flex items-baseline gap-3">
            <span className="text-base leading-5 font-bold text-white tabular-nums">
              {views.toLocaleString("en-US")}
            </span>
            <span className="text-[8px] font-semibold text-[#2ee6a6]">
              ▲ 18%
            </span>
          </div>
          <div className="mt-1.5 flex items-center justify-between gap-2 text-[8px]">
            <span className="text-[#8a96a8]">Location</span>
            <span className="truncate font-semibold text-white">
              {ad.place}
            </span>
          </div>
        </div>

        <div
          className={`${chip} right-[8%] bottom-[10%] w-[134px] px-3 py-2.5`}
        >
          <div className="flex items-center justify-between text-[8px]">
            <span className="text-[#8a96a8]">Screens</span>
            <span className="font-semibold text-[#2ee6a6]">3 of 3 online</span>
          </div>
          <div className="mt-1.5 flex gap-1">
            {screens.map((name) => (
              <span
                key={name}
                className="flex flex-1 items-center justify-center gap-1 rounded border border-white/10 py-1 text-[7px] text-white"
              >
                <span className="size-[3px] rounded-full bg-[#2ee6a6]" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
