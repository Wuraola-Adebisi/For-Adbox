import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { Accent, Eyebrow, Section, SectionHeading } from "../components/ui";

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

const pad = (n: number) => String(n).padStart(2, "0");

export function HowItWorks() {
  const storyRef = useRef<HTMLDivElement>(null);
  const previousActive = useRef(0);
  const fadeTimeout = useRef<number | null>(null);

  const [active, setActive] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const step = steps[active];

  const changeStep = (next: number) => {
    if (next === previousActive.current) return;

    previousActive.current = next;

    if (fadeTimeout.current) {
      window.clearTimeout(fadeTimeout.current);
    }

    setActive(next);
    setIsChanging(true);

    fadeTimeout.current = window.setTimeout(() => {
      setIsChanging(false);
    }, 220);
  };

  const goToStep = (index: number) => {
    const story = storyRef.current;
    if (!story) return;

    const next = Math.min(steps.length - 1, Math.max(0, index));

    const travel = Math.max(1, story.offsetHeight - window.innerHeight);
    const progress = next / (steps.length - 1);

    const position =
      window.scrollY + story.getBoundingClientRect().top + travel * progress;

    changeStep(next);

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let frame = 0;

    const updateFromScroll = () => {
      frame = 0;

      const story = storyRef.current;
      if (!story) return;

      const rect = story.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);

      const progress = Math.min(1, Math.max(0, -rect.top / travel));

      const next = Math.min(
        steps.length - 1,
        Math.round(progress * (steps.length - 1)),
      );

      if (next !== previousActive.current) {
        changeStep(next);
      }
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateFromScroll);
      }
    };

    updateFromScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      if (fadeTimeout.current) {
        window.clearTimeout(fadeTimeout.current);
      }
    };
  }, []);

  return (
    <Section
      tone="surface"
      id="how-it-works"
      containerSize="wide"
      className="bg-how-bg pt-[180px] pb-[96px]"
    >
      <div ref={storyRef} className="relative min-h-[500vh]">
        <div className="sticky top-0 flex min-h-[calc(100svh-276px)] items-center">
          <div className="grid w-full items-start gap-x-8 gap-y-10 md:grid-cols-[533.5fr_538.5fr] md:gap-y-[54px]">
            <div className="md:col-start-1 md:row-start-1">
              <Eyebrow>How it works</Eyebrow>

              <SectionHeading className="mt-[26.5px] text-fg">
                From <Accent>campaign</Accent> brief to real-time{" "}
                <Accent>visibility</Accent>.
              </SectionHeading>

              <p className="mt-[16.9px] max-w-[500px] text-base leading-6 text-muted">
                Instead of waiting for your audience to find your advertisement
                — take your advertisement to them.
              </p>
            </div>

            <ol className="md:col-start-1 md:row-start-2">
              {steps.map((item, index) => {
                const isActive = index === active;

                return (
                  <li
                    key={item.title}
                    aria-current={isActive ? "step" : undefined}
                    className="group flex h-[60px] items-center gap-[22.5px] text-left"
                  >
                    <span
                      className={cn(
                        "flex h-9 w-12 shrink-0 items-center justify-center rounded-lg border",
                        "font-mono text-[13px] slashed-zero",
                        "transition-[background-color,border-color,color,transform,opacity]",
                        "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "scale-100 border-step-line bg-step text-brand opacity-100"
                          : "scale-[0.96] border-transparent bg-transparent text-muted opacity-70",
                      )}
                    >
                      {pad(index + 1)}
                    </span>

                    <span
                      className={cn(
                        "font-semibold text-[18px] leading-7 tracking-[-0.03em]",
                        "transition-[color,opacity,transform]",
                        "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "translate-x-0 text-fg opacity-100"
                          : "translate-x-0 text-inactive opacity-70 group-hover:text-muted",
                      )}
                    >
                      {item.title}
                    </span>
                  </li>
                );
              })}
            </ol>

            <div
              aria-live="polite"
              className="rounded-2xl border border-line bg-card px-8 pt-[34.5px] pb-8 md:col-start-2 md:row-start-2"
            >
              <div className="flex h-4 items-center justify-between">
                <div aria-hidden="true" className="flex items-center gap-1.5">
                  {steps.map((item, index) => (
                    <span
                      key={item.title}
                      className={cn(
                        "h-1.5 rounded-full",
                        "transition-[width,background-color]",
                        "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        index === active ? "w-5 bg-brand" : "w-1.5 bg-line",
                      )}
                    />
                  ))}
                </div>

                <span className="font-mono text-xs text-dim">
                  {active + 1} / {steps.length}
                </span>
              </div>

              <div
                className={cn(
                  "transition-[opacity,transform]",
                  "duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isChanging
                    ? "translate-y-1 opacity-0"
                    : "translate-y-0 opacity-100",
                )}
              >
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

              <div className="mt-[29px] flex gap-2 border-t border-line pt-5">
                <button
                  type="button"
                  onClick={() => goToStep(active - 1)}
                  disabled={active === 0}
                  className="inline-flex h-[38px] cursor-pointer items-center gap-1.5 rounded-lg border border-line px-3 text-sm text-muted transition-colors hover:text-fg disabled:cursor-default disabled:text-dim disabled:hover:text-dim"
                >
                  <span aria-hidden="true">←</span>
                  Prev
                </button>

                <button
                  type="button"
                  onClick={() => goToStep(active + 1)}
                  disabled={active === steps.length - 1}
                  className="inline-flex h-[38px] cursor-pointer items-center gap-1.5 rounded-lg bg-brand px-[13px] text-sm font-semibold text-on-brand transition duration-200 hover:brightness-110 disabled:cursor-default disabled:opacity-50 disabled:hover:brightness-100"
                >
                  Next
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
