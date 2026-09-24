import { useEffect, useRef, useState } from "react";
import agenciesPhoto from "../assets/photos/agencies.png";
import brandsPhoto from "../assets/photos/Images.png";
import smePhoto from "../assets/photos/Images (1).png";
import riderPhoto from "../assets/photos/Images (2).png";
import {
  Accent,
  Button,
  Pill,
  Section,
  SectionHeading,
} from "../components/ui";

const slides = [
  {
    id: "agencies",
    audience: "For ad agencies",
    title: "Scale campaigns. Extend your reach.",
    body: "Give your clients a new way to reach audiences beyond traditional media. AdBox helps agencies deploy dynamic, location-aware campaigns across a growing network of mobile digital screens.",
    action: "Advertise with AdBox",
    image: agenciesPhoto,
    alt: "Three colleagues at an ad agency reviewing a campaign on a laptop",
  },
  {
    id: "brands",
    audience: "For brands",
    title: "Make every impression count.",
    body: "Whether you're launching a product, driving foot traffic, building awareness or owning a location - AdBox puts your brand directly into the physical journeys of your audience.",
    action: "Advertise with AdBox",
    image: brandsPhoto,
    alt: "AdBox brand message displayed in a bright outdoor setting",
  },
  {
    id: "smes",
    audience: "For SMEs",
    title: "Get seen where your customers are.",
    body: "AdBox gives growing businesses an affordable way to put their brand in front of people across the locations that matter most.",
    action: "Grow with AdBox",
    image: smePhoto,
    alt: "Small business owner holding a jar of products in a shop",
  },
  {
    id: "riders",
    audience: "For riders",
    title: "Your route can do more.",
    body: "Equip your bike with AdBox technology carrier box. Turn the kilometres you already ride into an additional source of income. Join the AdBox network, keep moving and earn as you go.",
    action: "Become an AdBox Rider",
    image: riderPhoto,
    alt: "Delivery rider on a motorcycle with a bright yellow carrier box",
    extra: "Ride. Display. Earn.",
  },
];

export function ForWho() {
  const storyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const previousActive = useRef(0);

  useEffect(() => {
    let frame = 0;
    const scrollToHashSlide = () => {
      const story = storyRef.current;
      const index = slides.findIndex(
        (slide) => `#for-who-${slide.id}` === window.location.hash,
      );
      if (!story || index < 0) return;
      const travel = Math.max(1, story.offsetHeight - window.innerHeight);
      const position =
        window.scrollY +
        story.getBoundingClientRect().top +
        travel * (index / (slides.length - 1));
      window.scrollTo({ top: position, behavior: "smooth" });
    };
    const updateFromScroll = () => {
      frame = 0;
      const story = storyRef.current;
      if (!story) return;

      const rect = story.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const next = Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length),
      );

      if (next !== previousActive.current) {
        previousActive.current = next;
        setActive(next);
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    scrollToHashSlide();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", scrollToHashSlide);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", scrollToHashSlide);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const current = slides[active];

  return (
    <Section
      tone="surface"
      id="for-who"
      className="bg-value-bg pt-16 pb-16 md:pt-20 md:pb-16"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <SectionHeading className="max-w-[520px] text-fg">
          <Accent>Advertising</Accent> that works for everyone.
        </SectionHeading>
        <p className="max-w-[540px] text-base leading-7 text-soft md:mt-[16px] md:text-right">
          From brands and agencies to SMEs and riders, AdBox connects people,
          businesses and opportunities through{" "}
          <span className="font-semibold text-brand">
            advertising that moves.
          </span>
        </p>
      </div>

      <div ref={storyRef} className="relative mt-10 min-h-[320vh] md:mt-12">
        <div className="sticky top-4 flex min-h-[calc(100svh-1rem)] items-center md:top-24 md:min-h-[560px]">
          <div className="grid w-full items-center gap-8 md:grid-cols-[1fr_460px] md:gap-11">
            <div className="max-w-[480px]">
              <div
                key={current.audience}
                className="animate-[for-who-copy_500ms_ease-out]"
              >
                <Pill tone="brand" className="border-line-strong">
                  {current.audience}
                </Pill>
                <SectionHeading
                  size="panel"
                  className="mt-4 leading-[1.1] text-fg"
                >
                  {current.title}
                </SectionHeading>
                <p className="mt-4 text-base leading-6 text-soft-2">
                  {current.body}
                </p>
                {current.extra && (
                  <p className="mt-6 text-lg font-bold text-fg">
                    {current.extra}
                  </p>
                )}
                <Button
                  href="#contact"
                  arrow
                  className="mt-6 text-[15px] font-bold"
                >
                  {current.action}
                </Button>
              </div>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-[20px] md:h-[340px]">
              {slides.map((slide, index) => {
                const offset = index - active;
                const isCurrent = index === active;
                return (
                  <img
                    key={slide.audience}
                    src={slide.image}
                    alt={isCurrent ? slide.alt : ""}
                    aria-hidden={!isCurrent}
                    width={460}
                    height={340}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                    style={{
                      transform: `translateY(${offset * 100}%)`,
                      zIndex: isCurrent
                        ? slides.length + 1
                        : slides.length - Math.abs(offset),
                    }}
                  />
                );
              })}
              <span className="sr-only" aria-live="polite">
                {current.audience}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
