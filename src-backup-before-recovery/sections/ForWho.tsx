import agenciesPhoto from '../assets/photos/agencies.png'
import { Accent, Button, Pill, Section, SectionHeading } from '../components/ui'

// Tighter padding/gaps than the other sections on desktop, so this fits one viewport without
// scrolling, per feedback. Mobile keeps more breathing room since it scrolls naturally anyway.
export function ForWho() {
  return (
    <Section tone="surface" id="for-who" className="pt-16 pb-16 md:pt-20 md:pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <SectionHeading className="max-w-[520px] text-fg">
          <Accent>Advertising</Accent> that works for everyone.
        </SectionHeading>
        <p className="max-w-[540px] text-base leading-7 text-soft md:mt-[16px] md:text-right">
          From brands and agencies to SMEs and riders, AdBox connects people, businesses and opportunities
          through <span className="font-semibold text-brand">advertising that moves.</span>
        </p>
      </div>

      <div
        id="for-agencies"
        className="mt-10 grid items-center gap-8 md:mt-12 md:grid-cols-[1fr_460px] md:gap-11"
      >
        <div>
          <Pill tone="brand" className="border-line-strong">
            For ad agencies
          </Pill>
          <SectionHeading size="panel" className="mt-4 leading-[1.1] text-fg">
            Scale campaigns. Extend your reach.
          </SectionHeading>
          <p className="mt-4 max-w-[480px] text-base leading-6 text-soft-2">
            Give your clients a new way to reach audiences beyond traditional media. AdBox helps agencies
            deploy dynamic, location-aware campaigns across a growing network of mobile digital screens.
          </p>
          <Button href="#contact" arrow className="mt-6 text-[15px] font-bold">
            Advertise with AdBox
          </Button>
        </div>
        <img
          src={agenciesPhoto}
          alt="Three colleagues at an ad agency reviewing a campaign on a laptop"
          width={460}
          height={340}
          loading="lazy"
          className="h-[260px] w-full rounded-[20px] object-cover sm:h-[320px] md:h-[340px]"
        />
      </div>
    </Section>
  )
}
