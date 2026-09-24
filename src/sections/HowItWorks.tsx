import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/cn'
import { Accent, Eyebrow, Section, SectionHeading } from '../components/ui'

// TODO: the copy for steps 2 to 5 is placeholder text. Replace it with the client's copy.
const steps = [
  { title: 'Create Your Campaign', body: 'Upload your creative and define your campaign objectives.' },
  { title: 'Choose Your Reach', body: 'Pick the locations and audiences your campaign should reach.' },
  { title: 'AdBox Gets Moving', body: 'Riders carry your campaign across the city on their everyday routes.' },
  {
    title: 'Reach People Where They Are',
    body: 'Your ads play on the LED screens in the places your audience spends time.',
  },
  { title: 'Monitor Performance', body: 'Follow impressions and campaign activity as it happens.' },
]

const pad = (n: number) => String(n).padStart(2, '0')

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const triggerRefs = useRef<(HTMLSpanElement | null)[]>([])
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const step = steps[active];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.step);
          if (Number.isInteger(index)) setActive(index);
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0.5] },
    );
    const media = window.matchMedia("(max-width: 767px)");
    const observeCurrentTargets = () => {
      observer.disconnect();
      const targets = media.matches ? stepRefs.current : triggerRefs.current;
      targets.forEach((element) => element && observer.observe(element));
    };
    observeCurrentTargets();
    media.addEventListener("change", observeCurrentTargets);
    return () => {
      media.removeEventListener("change", observeCurrentTargets);
      observer.disconnect();
    };
  }, []);

  return (
    <Section
      tone="surface"
      id="how-it-works"
      containerSize="wide"
      className="pb-[96.5px]"
    >
      <div className="grid items-start gap-10 md:grid-cols-[533.5fr_538.5fr] md:gap-8">
        <div className="relative min-h-0 md:min-h-[560px]">
          <Eyebrow>How it works</Eyebrow>
          <SectionHeading className="mt-[26.5px] text-fg">
            From <Accent>campaign</Accent> brief to real-time{" "}
            <Accent>visibility</Accent>.
          </SectionHeading>
          <p className="mt-[16.9px] max-w-[500px] text-base leading-6 text-muted">
            Instead of waiting for your audience to find your advertisement —
            take your advertisement to them.
          </p>

          <ol className="mt-[54px]">
            {steps.map((item, index) => {
              const isActive = index === active;
              return (
                <li
                  key={item.title}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  data-step={index}
                  aria-current={isActive ? "step" : undefined}
                  className="group flex h-16 items-center gap-[22.5px] text-left md:h-[60px]"
                >
                  <span
                    className={cn(
                      "flex w-12 shrink-0 items-center justify-center font-mono text-[13px] slashed-zero",
                      isActive
                        ? "h-9 rounded-lg border border-step-line bg-step text-brand"
                        : "text-muted",
                    )}
                  >
                    {pad(index + 1)}
                  </span>
                  <span
                    className={cn(
                      "font-semibold transition-colors duration-200",
                      isActive
                        ? "text-2xl tracking-[-0.025em] text-fg"
                        : "text-lg tracking-[-0.03em] text-inactive group-hover:text-muted",
                    )}
                  >
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ol>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 bottom-0 flex flex-col"
          >
            {steps.map((item, index) => (
              <span
                key={item.title}
                ref={(element) => {
                  triggerRefs.current[index] = element;
                }}
                data-step={index}
                className="block min-h-0 flex-1"
              />
            ))}
          </div>
        </div>

        <div
          aria-live="polite"
          className="rounded-2xl border border-line bg-card px-8 pt-[34.5px] pb-8 md:sticky md:top-24 md:mt-[255.5px]"
        >
          <div className="flex h-4 items-center justify-between">
            <div aria-hidden="true" className="flex items-center gap-1.5">
              {steps.map((item, index) => (
                <span
                  key={item.title}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === active ? "w-5 bg-brand" : "w-1.5 bg-line",
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
          <h3 className="mt-[11px] text-[27px] leading-9 font-semibold tracking-[-0.03em] text-fg">
            {step.title}
          </h3>
          <p className="mt-[18.5px] text-base leading-6 text-muted">
            {step.body}
          </p>
        </div>
      </div>
    </Section>
  );
}
