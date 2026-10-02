import scene from "../assets/illustrations/Adbox_bike_rider_day_animated .svg.svg";
import { Accent, Button, Container } from "../components/ui";

export function FinalCta() {
  return (
    <section id="start" className="bg-final-bg pb-16 md:pb-24">
      <Container size="cta">
        <div className="relative flex flex-col overflow-hidden rounded-[30px] bg-cta-card text-fg md:h-[464.5px] md:flex-row md:items-center">
          <div className="px-5 pt-[44.5px] pb-8 text-center md:max-w-[560px] md:px-0 md:pt-[3px] md:pb-0 md:pl-16 md:text-left">
            <h2 className="font-sans text-[length:clamp(2rem,4vw,3rem)] leading-10 font-semibold tracking-[-1.68px] text-fg md:text-[48px] md:leading-[56px]">
              Your <Accent>audience</Accent> is already on the{" "}
              <Accent>move</Accent>.
            </h2>

            <p className="mt-[25.7px] text-lg leading-7 font-semibold tracking-[-0.02em] text-brand md:text-[22px]">
              Now your advertising can be too.
            </p>

            <p className="mt-[15px] text-base leading-8 text-muted md:mt-[23.5px] md:leading-6">
              Put your brand where people are — not just where screens are.
            </p>

            <div className="mt-10 flex flex-col gap-3 md:mt-12 md:flex-row md:flex-wrap">
              <Button
                href="#contact"
                className="h-14 w-full rounded-[14px] px-7 text-[17px] shadow-[0_10px_30px_-8px_rgba(0,189,214,0.5)] md:w-auto"
              >
                Start Advertising
              </Button>

              <Button
                href="#contact"
                variant="outline"
                className="h-14 w-full rounded-[14px] px-7 text-[17px] md:w-auto"
              >
                Talk to adbox
              </Button>
            </div>
          </div>

          <img
            src={scene}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={732}
            height={508}
            className="h-[234px] w-full object-cover md:absolute md:top-0 md:right-0 md:h-full md:w-auto"
          />
        </div>
      </Container>
    </section>
  );
}
