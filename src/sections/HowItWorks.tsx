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
      const travel = Math.max(1, story.offsetHeight - window.innerHeight);

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
      className="bg-how-bg pt-[92px] pb-[96px] md:pt-[180px]"
    >
      <div ref={storyRef} className="relative min-h-[500vh]">
        <div className="sticky top-0 z-10 flex min-h-screen items-start pt-[88px]">
          <div className="grid w-full items-start gap-x-8 gap-y-8 md:grid-cols-[533.5fr_538.5fr] md:gap-y-[54px]">
            <div className="md:col-start-1 md:row-start-1">
              <Eyebrow>How it works</Eyebrow>

              <SectionHeading className="mt-6 leading-10 text-fg md:mt-[26.5px] md:leading-[56px]">
                From <Accent>campaign</Accent> brief to real-time{" "}
                <Accent>visibility</Accent>.
              </SectionHeading>

              <p className="mt-[17px] max-w-[500px] text-base leading-6 text-muted md:mt-[16.9px]">
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
                    className={cn(
                      "group h-9 items-center gap-[22.5px] text-left md:flex md:h-[60px]",
                      isActive ? "flex" : "hidden",
                    )}
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
                        "text-2xl leading-8 font-semibold tracking-[-0.03em] md:text-[18px] md:leading-7",
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
              className="mt-0.5 rounded-2xl border border-line bg-card px-5 pt-[19px] pb-5 md:col-start-2 md:row-start-2 md:px-8 md:pt-[34.5px] md:pb-8"
            >
              <div className="flex h-4 items-center justify-between">
                <div aria-hidden="true" className="flex items-center gap-1.5">
                  {steps.map((item, index) => (
                    <span
                      key={item.title}
                      className={cn(
                        "h-[3px] rounded-full md:h-1.5",
                        "transition-[width,background-color]",
                        "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        index === active
                          ? "w-3.5 bg-brand md:w-5"
                          : "w-[3px] bg-fg md:w-1.5 md:bg-line",
                      )}
                    />
                  ))}
                </div>

                <span className="font-mono text-[8px] text-brand md:text-xs md:text-dim">
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
                <span className="mt-[14px] block font-mono text-[11px] leading-5 text-brand slashed-zero md:mt-[25px] md:text-[13px]">
                  {pad(active + 1)}
                </span>

                <h3 className="mt-0.5 text-[18.5px] leading-7 font-bold tracking-[-0.03em] text-fg md:text-[27px] md:leading-9 md:font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-[11px] leading-4 text-brand md:mt-[18.5px] md:text-base md:leading-6 md:text-muted">
                  {step.body}
                </p>
              </div>

              <div className="mt-4 flex gap-1.5 border-t border-line pt-3 md:mt-[29px] md:gap-2 md:pt-5">
                <button
                  type="button"
                  onClick={() => goToStep(active - 1)}
                  disabled={active === 0}
                  className="inline-flex h-6 cursor-pointer items-center gap-1.5 rounded-md border border-line px-2 text-[10px] text-muted transition-colors hover:text-fg disabled:cursor-default disabled:text-dim disabled:hover:text-dim md:h-[38px] md:rounded-lg md:px-3 md:text-sm"
                >
                  <span aria-hidden="true">←</span>
                  Prev
                </button>

                <button
                  type="button"
                  onClick={() => goToStep(active + 1)}
                  disabled={active === steps.length - 1}
                  className="inline-flex h-6 cursor-pointer items-center gap-1.5 rounded-md bg-brand px-2 text-[10px] font-semibold text-on-brand transition duration-200 hover:brightness-110 disabled:cursor-default disabled:opacity-50 disabled:hover:brightness-100 md:h-[38px] md:rounded-lg md:px-[13px] md:text-sm"
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
