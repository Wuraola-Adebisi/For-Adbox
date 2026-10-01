import carrierScene from "../assets/illustrations/Animated box for problem section.svg";
import rider from "../assets/illustrations/rider-bike.svg";
import { Eyebrow, Section, SectionHeading } from "../components/ui";

export function Problem() {
  return (
    <Section
      tone="ink"
      id="problem"
      containerSize="problem"
      className="bg-problem-bg pb-[90px] md:pb-[180px]"
    >
      <div className="flex flex-col gap-[29px] md:flex-row md:items-start md:justify-between md:gap-6">
        <SectionHeading className="text-[24px] leading-[30px] text-fg md:text-[48px] md:leading-[56px]">
          Your audience moves. <br className="hidden md:block" />
          Your advertising doesn't.
        </SectionHeading>
        <div className="md:mt-[34.4px] md:text-right">
          <p className="text-base leading-5 text-soft md:leading-6">
            Traditional billboard ads are static and easy to ignore.
          </p>
          <p className="text-base leading-5 font-semibold text-brand md:mt-2 md:leading-6">
            adbox puts your brand in motion.
          </p>
        </div>
      </div>

      <div className="mt-[49px] flex flex-col items-stretch text-left md:mt-[98px] md:items-center md:pl-[14px] md:text-center">
        <Eyebrow className="self-center">The solution</Eyebrow>
        <p className="mt-[25.2px] font-sans text-[32px] leading-10 font-semibold tracking-[0.5px] text-fg md:text-[48px] md:leading-[56px]">
          Meet adbox.
        </p>
        <h2 className="font-sans text-[min(32px,8.2vw)] leading-10 font-semibold tracking-[0.5px] whitespace-nowrap text-brand md:mt-1 md:text-[48px] md:leading-[56px] md:whitespace-normal">
          A smarter way to <br className="md:hidden" />advertise on the move.
        </h2>
        <p className="mt-4 max-w-[860px] text-base leading-6 text-muted md:mt-[18.5px]">
          adbox transforms dispatch riders into mobile digital billboards with
          purpose-built carrier boxes, featuring three integrated LED screens
          and location-aware technology to deliver your message where your
          audience is.
        </p>
      </div>

      <div className="mt-[47px] flex flex-col items-center justify-center gap-10 md:mt-24 md:flex-row md:gap-16 md:pl-[14px]">
        <img
          src={carrierScene}
          alt="The adbox carrier box showing a live ad, with status panels for views and screens"
          width={435}
          height={362}
          loading="lazy"
          className="w-full max-w-[435px] shrink-0"
        />
        <img
          src={rider}
          alt="A delivery rider on a bike with an adbox carrier showing a Flash Sale ad"
          width={372}
          height={338}
          loading="lazy"
          className="w-[300px] max-w-full shrink-0 md:w-full md:max-w-[372px]"
        />
      </div>
    </Section>
  );
}
