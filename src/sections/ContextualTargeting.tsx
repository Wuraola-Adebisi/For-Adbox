import { cn } from '../lib/cn'
import { Accent, Eyebrow, Section, SectionHeading } from '../components/ui'

const cases = [
  { dot: 'bg-dot-orange', title: 'Near a restaurant', body: "Promote today's offer." },
  { dot: 'bg-dot-pink', title: 'Near a retail district', body: 'Drive shoppers to your store.' },
  { dot: 'bg-dot-purple', title: 'Near a university', body: 'Reach a younger, highly concentrated audience.' },
  { dot: 'bg-brand', title: 'In a business district', body: 'Put your brand in front of professionals.' },
  { dot: 'bg-dot-green', title: 'A new neighbourhood', body: 'Deliver a message relevant to that community.' },
]

export function ContextualTargeting() {
  return (
    <Section
      tone="ink"
      id="contextual-targeting"
      className="bg-context-bg pt-[92px] pb-[67px] md:pt-[182px] md:pb-[97px]"
    >
      <Eyebrow>Contextual targeting</Eyebrow>
      <SectionHeading className="mt-6 max-w-[780px] leading-10 text-fg md:mt-[25.5px] md:leading-[56px]">
        The right <Accent>message</Accent> depends on{" "}
        <Accent>where you are</Accent>.
      </SectionHeading>
      <p className="mt-[17px] max-w-[780px] text-base leading-6 text-muted md:mt-[16.4px]">
        A campaign doesn't have to look the same everywhere. With location-aware
        advertising, brands can create campaigns that respond to the
        environments their audiences move through.
      </p>

      <ul className="mt-[47px] mr-1.5 grid gap-x-3.5 gap-y-5 md:mr-0 md:grid-cols-3 md:gap-y-[15px]">
        {cases.map((item) => (
          <li
            key={item.title}
            className="flex h-[108px] gap-3.5 rounded-2xl border border-line bg-card px-[26px] pt-[26px] pb-[18.5px] md:h-auto md:px-[22px] md:pt-[22px]"
          >
            <span
              aria-hidden="true"
              className={cn("mt-[3px] size-2 shrink-0 rounded-full", item.dot)}
            />
            <div>
              <h3 className="text-[15px] leading-tight font-bold text-fg md:text-[13px]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-muted md:text-[13px]">
                {item.body}
              </p>
            </div>
          </li>
        ))}
        <li className="flex h-[109px] flex-col justify-center rounded-2xl border border-brand/25 bg-tint px-[26px] text-lg leading-[21px] md:block md:h-auto md:px-[22px] md:pt-5 md:pb-[18px] md:text-base md:leading-[21.7px]">
          <p className="text-fg">Advertising becomes more than exposure.</p>
          <p className="mt-[2px] font-semibold text-brand">
            It becomes context.
          </p>
        </li>
      </ul>
    </Section>
  );
}
