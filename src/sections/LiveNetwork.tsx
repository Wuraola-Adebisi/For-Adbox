import cityDark from "../assets/city/Container_city_live_animated.svg";
import cityLight from "../assets/city/Container_city_live_day_animated.svg";
import { Accent, Eyebrow, Section, SectionHeading } from "../components/ui";

export function LiveNetwork() {
  return (
    <Section tone="ink" id="live-network" className="bg-live-bg pb-[97px]">
      <Eyebrow>Live network</Eyebrow>
      <div className="mt-[25.5px] flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <SectionHeading className="text-fg md:leading-[48px]">
          The city, in <Accent>real time.</Accent>
        </SectionHeading>
        <p className="inline-flex items-center gap-2 text-[15px] font-medium text-muted">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-dot-green"
          />
          Live · Lagos, Nigeria
        </p>
      </div>
      <p className="mt-[17.5px] max-w-[580px] text-base leading-6 text-muted">
        Our technology connects brands to a moving network of riders moving
        across various locations, delivering digital ads where your audience is
        most likely to see them.
      </p>

      <div className="relative mt-[47px] aspect-[1060/615.5] w-full overflow-hidden">
        <img
          src={cityDark}
          alt="Isometric night view of Lagos with live panels showing active boxes, impressions and riders on the move"
          loading="lazy"
          className="only-dark absolute inset-0 h-full w-full object-cover object-top"
        />
        <img
          src={cityLight}
          alt="Isometric daytime view of Lagos with live panels showing active boxes, impressions and riders on the move"
          loading="lazy"
          className="only-light absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </Section>
  );
}
