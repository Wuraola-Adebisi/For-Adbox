import cityDark from "../assets/city/Container_city_live_animated.svg";
import cityLight from "../assets/city/Container_city_live_day_animated.svg";
import { Accent, Eyebrow, Section, SectionHeading } from "../components/ui";

export function LiveNetwork() {
  return (
    <Section tone="ink" id="live-network" className="bg-live-bg pt-[92px] pb-[90px] md:pt-[182px] md:pb-[97px]">
      <Eyebrow>Live network</Eyebrow>
      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 md:mt-[25.5px]">
        <SectionHeading className="leading-10 text-fg md:leading-[48px]">
          The city, in <Accent>real time.</Accent>
        </SectionHeading>
        <p className="hidden items-center gap-2 text-[15px] font-medium text-muted md:inline-flex">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-dot-green"
          />
          Live · Lagos, Nigeria
        </p>
      </div>
      <p className="mt-[29px] max-w-[580px] text-base leading-6 text-muted md:mt-[17.5px]">
        Our technology connects brands to a moving network of riders moving
        across various locations, delivering digital ads where your audience is
        most likely to see them.
      </p>
      <p className="mt-[18px] flex items-center justify-end gap-2 text-[13px] leading-5 font-medium text-muted md:hidden">
        <span
          aria-hidden="true"
          className="size-2 rounded-full bg-dot-green"
        />
        Live · Lagos, Nigeria
      </p>

      <div className="relative mt-[33px] -mx-5 h-[444px] w-[calc(100%+2.5rem)] overflow-hidden md:mx-0 md:mt-[47px] md:aspect-[1060/615.5] md:h-auto md:w-full md:rounded-[20px]">
        <img
          src={cityDark}
          alt="Isometric night view of Lagos with live panels showing active boxes, impressions and riders on the move"
          loading="lazy"
          className="only-dark absolute inset-0 h-full w-full object-cover object-center md:rounded-[20px] md:object-top"
        />
        <img
          src={cityLight}
          alt="Isometric daytime view of Lagos with live panels showing active boxes, impressions and riders on the move"
          loading="lazy"
          className="only-light absolute inset-0 h-full w-full object-cover object-center md:rounded-[20px] md:object-top"
        />
      </div>
    </Section>
  );
}
