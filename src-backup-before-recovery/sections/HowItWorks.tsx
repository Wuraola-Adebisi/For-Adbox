import { useState } from 'react'
import { cn } from '../lib/cn'
import { Accent, Eyebrow, Section, SectionHeading } from '../components/ui'

// TODO: the copy for steps 2 to 5 is placeholder text. Replace it with the client's copy.
const steps = [
  {
    title: "Create Your Campaign",
    body: "Upload your creative and define your campaign objectives.",
  },
  {
    title: "Choose Your Reach",
    body: "Pick the locations and audiences your campaign should reach.",
  },
  {
    title: "adbox Gets Moving",
    body: "Riders carry your campaign across the city on their everyday routes.",
  },
  {
    title: "Reach People Where They Are",
    body: "Your ads play on the LED screens in the places your audience spends time.",
  },
  {
    title: "Monitor Performance",
    body: "Follow impressions and campaign activity as it happens.",
  },
];

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === 'left' ? <path d="M19 12H5m6-6-6 6 6 6" /> : <path d="M5 12h14m-6-6 6 6-6 6" />}
    </svg>
  )
}

const pad = (n: number) => String(n).padStart(2, '0')

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const step = steps[active]
  const last = steps.length - 1

  return (
    <Section tone="surface" id="how-it-works" containerSize="wide" className="pb-[96.5px]">
      <div className="grid items-start gap-10 md:grid-cols-[533.5fr_538.5fr] md:gap-8">
        <div>
          <Eyebrow>How it works</Eyebrow>
          <SectionHeading className="mt-[26.5px] text-fg">
            From <Accent>campaign</Accent> brief to real-time <Accent>visibility</Accent>.
          </SectionHeading>
          <p className="mt-[16.9px] max-w-[500px] text-base leading-6 text-muted">
            Instead of waiting for your audience to find your advertisement — take your advertisement to them.
          </p>

          <ol className="mt-[54px]">
            {steps.map((item, index) => {
              const isActive = index === active
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={isActive ? 'step' : undefined}
                    className="group flex h-[60px] w-full cursor-pointer items-center gap-[22.5px] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <span
                      className={cn(
                        'flex w-12 shrink-0 items-center justify-center font-mono text-[13px] slashed-zero',
                        isActive
                          ? 'h-9 rounded-lg border border-step-line bg-step text-brand'
                          : 'text-muted',
                      )}
                    >
                      {pad(index + 1)}
                    </span>
                    <span
                      className={cn(
                        'font-semibold transition-colors duration-200',
                        isActive
                          ? 'text-2xl tracking-[-0.025em] text-fg'
                          : 'text-lg tracking-[-0.03em] text-inactive group-hover:text-muted',
                      )}
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        <div
          aria-live="polite"
          className="rounded-2xl border border-line bg-card px-8 pt-[34.5px] pb-8 md:mt-[255.5px]"
        >
          <div className="flex h-4 items-center justify-between">
            <div aria-hidden="true" className="flex items-center gap-1.5">
              {steps.map((item, index) => (
                <span
                  key={item.title}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    index === active ? 'w-5 bg-brand' : 'w-1.5 bg-line',
                  )}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-dim">
              {active + 1} / {steps.length}
            </span>
          </div>

          <span className="mt-[25px] block font-mono text-[13px] leading-5 text-brand slashed-zero">
            {pad(active + 1)}
          </span>
          <h3 className="mt-[11px] text-[27px] leading-9 font-semibold tracking-[-0.03em] text-fg">{step.title}</h3>
          <p className="mt-[18.5px] text-base leading-6 text-muted">{step.body}</p>

          <div className="mt-[29px] flex gap-2 border-t border-line pt-5">
            <button
              type="button"
              onClick={() => setActive((value) => Math.max(0, value - 1))}
              disabled={active === 0}
              className="inline-flex h-[38px] cursor-pointer items-center gap-1.5 rounded-lg border border-line px-3 text-sm text-muted transition-colors hover:text-fg disabled:cursor-default disabled:text-dim disabled:hover:text-dim"
            >
              <Arrow direction="left" />
              Prev
            </button>
            <button
              type="button"
              onClick={() => setActive((value) => Math.min(last, value + 1))}
              disabled={active === last}
              className="inline-flex h-[38px] cursor-pointer items-center gap-1.5 rounded-lg bg-brand px-[13px] text-sm font-semibold text-on-brand transition duration-200 hover:brightness-110 disabled:cursor-default disabled:opacity-50 disabled:hover:brightness-100"
            >
              Next
              <Arrow direction="right" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
