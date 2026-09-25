import scene from "../assets/illustrations/adbox_bike_rider_day_animated .svg.svg";
import { Accent, Button, Container } from "../components/ui";

export function FinalCta() {
  return (
    <section
      id="start"
      className="border-t border-[#FFFFFF12] bg-final-bg pb-24"
    >
      <Container size="cta">
        <div className="relative flex flex-col overflow-hidden rounded-[30px] bg-cta-card text-fg md:h-[464.5px] md:flex-row md:items-center">
          <div className="px-8 py-12 md:max-w-[560px] md:px-0 md:pt-[3px] md:pb-0 md:pl-16">
            <h2 className="font-sans text-[length:clamp(2rem,4vw,3rem)] leading-[1.16] font-semibold tracking-[-1.68px] text-fg md:text-[48px] md:leading-[56px]">
              Your <Accent>audience</Accent> is already on the{" "}
              <Accent>move</Accent>.
            </h2>
            <p className="mt-[25.7px] text-[22px] leading-7 font-semibold tracking-[-0.02em] text-brand">
              Now your advertising can be too.
            </p>
            <p className="mt-[23.5px] text-base leading-6 text-muted">
              Put your brand where people are — not just where screens are.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button
                href="#contact"
                className="h-14 rounded-[14px] px-7 text-[17px] shadow-[0_10px_30px_-8px_rgba(0,189,214,0.5)]"
              >
                Start Advertising
              </Button>
              <Button
                href="#contact"
                variant="outline"
                className="h-14 rounded-[14px] px-7 text-[17px]"
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
            className="h-auto w-full object-cover md:absolute md:top-0 md:right-0 md:h-full md:w-auto"
          />
        </div>
      </Container>
    </section>
  );
}
