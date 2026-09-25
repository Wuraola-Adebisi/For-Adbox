import carrierScene from '../assets/carrier/adbox_delivery_box_animated.svg'
import rider from '../assets/illustrations/rider-bike.svg'
import { Eyebrow, Section, SectionHeading } from '../components/ui'

export function Problem() {
  return (
    <Section
      tone="ink"
      id="problem"
      containerSize="problem"
      className="pb-[180px]"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <SectionHeading className="text-fg">
          Your audience moves. <br className="hidden md:block" />
          Your advertising doesn't.
        </SectionHeading>
        <div className="md:mt-[34.4px] md:text-right">
          <p className="text-base leading-6 text-soft">
            Traditional billboard ads are static and easy to ignore.
          </p>
          <p className="mt-2 text-base leading-6 font-semibold text-brand">
            adbox puts your brand in motion.
          </p>
        </div>
      </div>

      <div className="mt-[98px] flex flex-col items-center text-center md:pl-[14px]">
        <Eyebrow>The solution</Eyebrow>
        <p className="mt-[25.2px] text-[length:clamp(1.75rem,2.78vw,2.5rem)] leading-[1.1] font-medium text-fg">
          Meet adbox.
        </p>
        <h2 className="mt-1 text-[length:clamp(1.75rem,2.85vw,2.5625rem)] leading-[1.1] font-medium text-brand">
          A smarter way to advertise on the move.
        </h2>
        <p className="mt-[18.5px] max-w-[860px] text-base leading-6 text-muted">
          adbox transforms dispatch riders into mobile digital billboards with
          purpose-built carrier boxes, featuring three integrated LED screens
          and location-aware technology to deliver your message where your
          audience is.
        </p>
      </div>

      <div className="mt-24 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16 md:pl-[14px]">
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
          className="w-full max-w-[372px] shrink-0"
        />
      </div>
    </Section>
  );
}
