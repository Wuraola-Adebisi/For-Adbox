import { useState, type CSSProperties } from "react";
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
    body: "Give your clients a new way to reach audiences beyond traditional media. adbox helps agencies deploy dynamic, location-aware campaigns across a growing network of mobile digital screens.",
    action: "Advertise with adbox",
    image: agenciesPhoto,
    alt: "Three colleagues at an ad agency reviewing a campaign on a laptop",
  },
  {
    id: "brands",
    audience: "For brands",
    title: "Make every impression count.",
    body: "Whether you're launching a product, driving foot traffic, building awareness or owning a location - adbox puts your brand directly into the physical journeys of your audience.",
    action: "Advertise with adbox",
    image: brandsPhoto,
    alt: "adbox brand message displayed in a bright outdoor setting",
  },
  {
    id: "smes",
    audience: "For SMEs",
    title: "Get seen where your customers are.",
    body: "adbox gives growing businesses an affordable way to put their brand in front of people across the locations that matter most.",
    action: "Grow with adbox",
    image: smePhoto,
    alt: "Small business owner holding a jar of products in a shop",
  },
  {
    id: "riders",
    audience: "For riders",
    title: "Your route can do more.",
    body: "Equip your bike with adbox technology carrier box. Turn the kilometres you already ride into an additional source of income. Join the adbox network, keep moving and earn as you go.",
    action: "Become an adbox Rider",
    image: riderPhoto,
    alt: "Delivery rider on a motorcycle with a bright yellow carrier box",
    extra: "Ride. Display. Earn.",
  },
];

type Slide = (typeof slides)[number];

const LAST = slides.length - 1;

export function ForWho() {
  const [position, setPosition] = useState(0);

  const isFirst = position === 0;
  const isLast = position === LAST;

  // No looping: prev is disabled on the first card, next on the last.
  const goNext = () => setPosition((p) => Math.min(p + 1, LAST));
  const goPrev = () => setPosition((p) => Math.max(p - 1, 0));

  return (
    <Section
      tone="surface"
      id="for-who"
      className="for-who-section overflow-x-clip pt-[90px] pb-[90px] md:pt-[180px] md:pb-16"
    >
      <div>
        <SectionHeading className="max-w-[520px] leading-12 text-fg md:leading-[56px]">
          <Accent>Advertising</Accent> that works for everyone.
        </SectionHeading>

        <p className="mt-[17px] max-w-[560px] text-base leading-6 text-soft md:mt-5 md:leading-8">
          From brands and agencies to SMEs and riders, adbox connects people,
          businesses and opportunities through{" "}
          <span className="font-semibold text-brand md:font-normal md:text-soft">
            advertising that <br className="md:hidden" />
            moves.
          </span>
        </p>
      </div>

      {/* Stage. Below md the cards sit in a row and slide, with the next card
          peeking in. From md up all cards share one grid cell and only opacity
          changes, so there is no layout work and no image decode during a change. */}
      <div className="relative mt-10 md:mt-12">
        <div
          className="for-who-track grid auto-cols-[calc(100%-16px)] grid-flow-col gap-5 md:w-[calc(100%-3rem)] md:auto-cols-auto md:grid-flow-row md:gap-0"
          style={{ "--slide": position } as CSSProperties}
        >
          {slides.map((slide, i) => {
            const active = i === position;
            return (
              <div
                key={slide.id}
                aria-hidden={!active}
                inert={!active}
                className={`for-who-card rounded-[20px] p-4 motion-reduce:transition-none sm:p-6 md:col-start-1 md:row-start-1 md:p-10 ${
                  active
                    ? "z-10 opacity-100 md:transition-opacity md:duration-300 md:ease-out"
                    : "opacity-100 md:opacity-0 md:transition-opacity md:delay-300 md:duration-0"
                }`}
              >
                <SlideCard slide={slide} />
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex h-[52px] w-[120px] shrink-0 items-center gap-3 rounded-[71px] bg-[#222832] px-3 py-2 md:absolute md:-top-[100px] md:right-0 md:mx-0 md:mt-0">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous audience"
            disabled={isFirst}
            className="flex h-full flex-1 items-center justify-center rounded-full text-fg transition-[background-color,opacity] duration-200 enabled:cursor-pointer enabled:hover:bg-fg/20 disabled:cursor-default disabled:opacity-40"
          >
            <ChevronIcon direction="left" />
          </button>

          <span className="h-6 w-px shrink-0 bg-fg/60" aria-hidden="true" />

          <button
            type="button"
            onClick={goNext}
            aria-label="Next audience"
            disabled={isLast}
            className="flex h-full flex-1 items-center justify-center rounded-full text-fg transition-[background-color,opacity] duration-200 enabled:cursor-pointer enabled:hover:bg-fg/20 disabled:cursor-default disabled:opacity-40"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>
    </Section>
  );
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div className="grid items-center gap-7 sm:gap-8 md:grid-cols-[1fr_481px] md:gap-12">
      <div className="max-w-[480px]">
        <SlideCopy slide={slide} />
      </div>

      <div className="h-[260px] w-full overflow-hidden rounded-[16px] sm:h-[280px] sm:rounded-[20px] md:h-[433px]">
        <img
          src={slide.image}
          alt={slide.alt}
          width={481}
          height={433}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function SlideCopy({ slide }: { slide: Slide }) {
  return (
    <>
      <Pill tone="brand" className="h-7 border-line-strong text-soft md:h-6">
        {slide.audience}
      </Pill>

      <SectionHeading
        size="panel"
        className="mt-4 text-2xl leading-[30px] text-fg md:text-[length:clamp(1.75rem,2.8vw,2.5rem)] md:leading-[1.1]"
      >
        {slide.title}
      </SectionHeading>

      <p className="mt-4 text-sm leading-5 text-soft-2 md:text-base md:leading-6">{slide.body}</p>

      {slide.extra && (
        <p className="mt-6 text-lg font-bold text-fg">{slide.extra}</p>
      )}

      <Button
        href="#contact"
        arrow
        className="for-who-button mt-6 h-11 w-full text-[15px] font-bold md:h-auto md:w-auto"
      >
        {slide.action}
      </Button>
    </>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={direction === "right" ? "rotate-180" : undefined}
    >
      <path
        d="M11.25 3.75L6 9l5.25 5.25"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
