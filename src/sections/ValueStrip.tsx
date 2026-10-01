import { ChartIcon, EyeIcon, NetworkIcon, PinIcon } from '../components/icons'
import { Container } from '../components/ui'
import { cn } from '../lib/cn'

const items = [
  { Icon: PinIcon, title: 'Location-aware', body: 'Reach audiences based on where they are.' },
  { Icon: NetworkIcon, title: 'Dynamic', body: 'Different messages across locations and moments.' },
  { Icon: EyeIcon, title: 'Visible', body: 'Three LED screens on every journey.' },
  { Icon: ChartIcon, title: 'Measurable', body: 'Track campaigns, locations and delivery performance.' },
]

export function ValueStrip() {
  return (
    <section aria-label="Why adbox at a glance" className="bg-value-bg">
      <Container size="nav" bleed>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, body }, index) => (
            <li
              key={title}
              className={cn(
                "border-b border-line px-6 pt-6 pb-[23px] last:border-b-0 sm:border-b-0 sm:pt-8 sm:pb-[27.5px]",
                index > 0 && "lg:border-l lg:border-line-strong",
                index % 2 === 1 && "sm:border-l sm:border-line-strong",
              )}
            >
              <Icon className="size-6 text-brand" />
              <h3 className="mt-3 text-xl leading-7 font-semibold text-fg sm:mt-[9.5px] sm:text-[13px] sm:leading-5">
                {title}
              </h3>
              <p className="mt-3 text-base leading-[22px] text-muted sm:mt-[6.5px] sm:max-w-[190px] sm:text-[13px] sm:leading-[1.6]">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}