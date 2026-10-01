import { Accent, Button, Container, SectionHeading } from '../components/ui'
import { HeroCarrier } from './HeroCarrier'
import { HeroPill } from './HeroPill'

export function Hero() {
  return (
    <section
      id="top"
      className="hero-grid relative isolate overflow-hidden bg-hero-bg text-hero-fg"
    >
      <Container size="wide">
        <div className="flex flex-col items-center pt-10 pb-6 text-center md:pt-[100px] md:pb-[59px]">
          <HeroCarrier />

          <div className="mt-2.5 flex justify-center">
            <HeroPill />
          </div>

          <SectionHeading
            as="h1"
            size="hero"
            className="mt-2.5 max-w-[1100px] text-center font-sans leading-[50px] font-bold tracking-normal text-hero-fg md:mt-[30px] md:text-[96px] md:leading-[104px]"
          >
            <Accent>Advertising</Accent> That Moves With Your{" "}
            <Accent>Audience</Accent>
          </SectionHeading>

          <p className="mt-3 max-w-[900px] text-base leading-5 text-hero-fg md:mt-5 md:leading-6">
            adbox transforms delivery riders into mobile digital advertising
            platforms, using smart LED displays and location-aware technology to
            deliver relevant brand messages in the places that matter most.
          </p>

          <div className="mt-6 flex w-full flex-col gap-4 md:mt-9 md:w-auto md:flex-row md:flex-wrap md:justify-center md:gap-6">
            <Button
              href="#contact"
              className="h-14 w-full rounded-2xl font-ui text-base leading-6 md:h-auto md:w-auto md:min-w-[182px] md:rounded-xl md:text-sm"
            >
              Launch A Campaign
            </Button>
            <Button
              href="#for-who-riders"
              variant="secondary"
              className="h-14 w-full rounded-2xl font-ui text-base leading-6 md:h-auto md:w-auto md:min-w-[182px] md:rounded-xl md:text-sm"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
