import { useState } from "react";
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
      className="for-who-section overflow-x-clip pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-[180px] md:pb-16"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeading className="max-w-[520px] text-fg">
            <Accent>Advertising</Accent> that works for everyone.
          </SectionHeading>

          <p className="mt-5 max-w-[560px] text-base leading-8 text-soft">
            From brands and agencies to SMEs and riders, adbox connects people,
            businesses and opportunities through advertising that moves.
          </p>
        </div>

        <div className="flex h-[52px] w-[120px] shrink-0 items-center gap-3 rounded-[71px] bg-[#222832] px-3 py-2">
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

      {/* Stage. All cards share one grid cell and only opacity changes, so
          there is no layout work and no image decode during a change. */}
      <div className="relative mt-8 sm:mt-10 md:mt-12">
        <div className="grid md:w-[calc(100%-3rem)]">
          {slides.map((slide, i) => {
            const active = i === position;
            return (
              <div
                key={slide.id}
                aria-hidden={!active}
                inert={!active}
                className={`for-who-card col-start-1 row-start-1 rounded-[20px] p-5 motion-reduce:transition-none sm:p-6 md:p-10 ${
                  active
                    ? "z-10 opacity-100 transition-opacity duration-300 ease-out"
                    : "opacity-0 transition-opacity delay-300 duration-0"
                }`}
              >
                <SlideCard slide={slide} />
              </div>
            );
          })}
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

      <div className="h-[240px] w-full overflow-hidden rounded-[16px] sm:h-[280px] sm:rounded-[20px] md:h-[433px]">
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
      <Pill tone="brand" className="border-line-strong text-soft">
        {slide.audience}
      </Pill>

      <SectionHeading size="panel" className="mt-4 leading-[1.1] text-fg">
        {slide.title}
      </SectionHeading>

      <p className="mt-4 text-base leading-6 text-soft-2">{slide.body}</p>

      {slide.extra && (
        <p className="mt-6 text-lg font-bold text-fg">{slide.extra}</p>
      )}

      <Button href="#contact" arrow className="mt-6 text-[15px] font-bold">
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