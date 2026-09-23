import { Accent, Button, Container, SectionHeading } from '../components/ui'
import { HeroCarrier } from './HeroCarrier'
import { HeroPill } from './HeroPill'

export function Hero() {
  return (
    <section id="top" className="hero-grid relative isolate overflow-hidden bg-hero-bg text-hero-fg">
      <Container size="wide">
        <div className="flex flex-col items-center pt-24 pb-[59px] text-center md:pt-[100px]">
          <HeroCarrier />

          <div className="mt-2.5 flex justify-center">
            <HeroPill />
          </div>

          <SectionHeading as="h1" size="hero" className="mt-[30px] max-w-[1100px] text-hero-fg">
            <Accent>Advertising</Accent> That Moves With Your <Accent>Audience</Accent>
          </SectionHeading>

          <p className="mt-5 max-w-[900px] text-base leading-6 text-hero-fg">
            AdBox transforms delivery riders into mobile digital advertising platforms, using smart LED
            displays and location-aware technology to deliver relevant brand messages in the places that
            matter most.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-6">
            <Button href="#contact" className="min-w-[182px] font-ui text-sm leading-6">
              Launch A Campaign
            </Button>
            <Button href="#become-a-rider" variant="secondary" className="min-w-[182px] font-ui text-sm leading-6">
              Partner With Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
