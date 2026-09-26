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
type Direction = 1 | -1;

const SLIDE_DURATION = 650;
const SLIDE_COUNT = slides.length;

export function ForWho() {
  const [position, setPosition] = useState(SLIDE_COUNT);
  const [direction, setDirection] = useState<Direction>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const rafRef = useRef<number>();

  const carouselSlides = [...slides, ...slides, ...slides];

  const goTo = (nextPosition: number, dir: Direction) => {
    if (isAnimating) return;

    window.clearTimeout(timeoutRef.current);

    setDirection(dir);
    setIsAnimating(true);
    setPosition(nextPosition);

    timeoutRef.current = setTimeout(() => {
      const isPastRightCopy = nextPosition >= SLIDE_COUNT * 2;
      const isBeforeLeftCopy = nextPosition < SLIDE_COUNT;

      if (isPastRightCopy || isBeforeLeftCopy) {
        const resetPosition = isPastRightCopy
          ? nextPosition - SLIDE_COUNT
          : nextPosition + SLIDE_COUNT;

        setTransitionEnabled(false);
        setPosition(resetPosition);

        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = requestAnimationFrame(() => {
            setTransitionEnabled(true);
            setIsAnimating(false);
          });
        });

        return;
      }

      setIsAnimating(false);
    }, SLIDE_DURATION);
  };

  const goNext = () => {
    goTo(position + 1, 1);
  };

  const goPrev = () => {
    goTo(position - 1, -1);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const activeIndex = position % SLIDE_COUNT;

  return (
    <Section
      tone="surface"
      id="for-who"
      className="for-who-section pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-[180px] md:pb-16"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <SectionHeading className="max-w-[520px] text-fg">
          <Accent>Advertising</Accent> that works for everyone.
        </SectionHeading>

        <div className="flex flex-col gap-4 md:max-w-[620px] md:flex-row md:items-start md:justify-between md:gap-6">
          <p className="max-w-[540px] text-base leading-7 text-soft md:text-right">
            From brands and agencies to SMEs and riders, adbox connects
            people, businesses and opportunities through{" "}
            <span className="font-semibold text-brand">
              advertising that moves.
            </span>
          </p>

          <div className="flex w-fit shrink-0 items-center gap-3 rounded-full border border-line-strong px-3 py-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous audience"
              disabled={isAnimating}
              className="flex h-6 w-6 items-center justify-center text-soft transition-colors duration-200 hover:text-fg disabled:pointer-events-none"
            >
              <ChevronIcon direction="left" />
            </button>

            <span
              className="h-4 w-px bg-line-strong"
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={goNext}
              aria-label="Next audience"
              disabled={isAnimating}
              className="flex h-6 w-6 items-center justify-center text-soft transition-colors duration-200 hover:text-fg disabled:pointer-events-none"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="relative mt-8 w-full overflow-hidden sm:mt-10 md:mt-12">
        <div
          className="relative"
          style={{
            paddingRight: "80px",
          }}
        >
          <div
            className="flex gap-6"
            style={{
              transform: `translate3d(calc(-${position} * (100% + 24px)), 0, 0)`,
              transition: transitionEnabled
                ? `transform ${SLIDE_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`
                : "none",
              willChange: "transform",
            }}
          >
            {carouselSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className="for-who-card w-full shrink-0 rounded-[20px] p-5 sm:p-6 md:p-10"
                aria-hidden={index % SLIDE_COUNT !== activeIndex}
              >
                <SlideCard slide={slide} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </Section>
  );
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div className="relative grid items-center gap-7 sm:gap-8 md:min-h-[433px] md:grid-cols-[1fr_460px] md:gap-12">
      <div className="max-w-[480px]">
        <SlideCopy slide={slide} />
      </div>

      <div className="relative h-[240px] w-full overflow-hidden rounded-[16px] sm:h-[280px] sm:rounded-[20px] md:h-[340px]">
        <img
          src={slide.image}
          alt={slide.alt}
          width={460}
          height={340}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function SlideCopy({ slide }: { slide: Slide }) {
  return (
    <>
      <Pill tone="brand" className="border-line-strong">
        {slide.audience}
      </Pill>

      <SectionHeading size="panel" className="mt-4 leading-[1.1] text-fg">
        {slide.title}
      </SectionHeading>

      <p className="mt-4 text-base leading-6 text-soft-2">
        {slide.body}
      </p>

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
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={direction === "right" ? "rotate-180" : undefined}
    >
      <path
        d="M11.25 3.75L6 9l5.25 5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}