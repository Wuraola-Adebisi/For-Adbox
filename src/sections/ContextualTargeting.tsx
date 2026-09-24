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
    <Section tone="ink" id="contextual-targeting" className="pb-[97px] bg-hero-bg">
      <Eyebrow>Contextual targeting</Eyebrow>
      <SectionHeading className="mt-[25.5px] max-w-[780px] text-fg">
        The right <Accent>message</Accent> depends on <Accent>where you are</Accent>.
      </SectionHeading>
      <p className="mt-[16.4px] max-w-[780px] text-base leading-6 text-muted">
        A campaign doesn't have to look the same everywhere. With location-aware advertising, brands can
        create campaigns that respond to the environments their audiences move through.
      </p>

      <ul className="mt-12 grid gap-x-3.5 gap-y-[15px] md:grid-cols-3">
        {cases.map((item) => (
          <li key={item.title} className="flex gap-3.5 rounded-2xl border border-line bg-card px-[22px] pt-[22px] pb-[18.5px]">
            <span aria-hidden="true" className={cn('mt-[3px] size-2 shrink-0 rounded-full', item.dot)} />
            <div>
              <h3 className="text-[13px] leading-tight font-bold text-fg">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-muted">{item.body}</p>
            </div>
          </li>
        ))}
        <li className="rounded-2xl border border-brand/25 bg-tint px-[22px] pt-5 pb-[18px] text-base leading-[21.7px]">
          <p className="text-fg">Advertising becomes more than exposure.</p>
          <p className="mt-[2px] font-semibold text-brand">It becomes context.</p>
        </li>
      </ul>
    </Section>
  )
}
