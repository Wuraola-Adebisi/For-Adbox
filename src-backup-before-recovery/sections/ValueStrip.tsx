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
    <section aria-label="Why AdBox at a glance" className="border-b border-line bg-surface">
      <Container size="nav">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, body }, index) => (
            <li
              key={title}
              className={cn(
                'px-6 pt-8 pb-[27.5px]',
                index > 0 && 'lg:border-l lg:border-line-strong',
                index % 2 === 1 && 'sm:border-l sm:border-line-strong',
              )}
            >
              <Icon className="size-6 text-brand" />
              <h3 className="mt-[9.5px] text-[13px] leading-5 font-semibold text-fg">{title}</h3>
              <p className="mt-[6.5px] max-w-[190px] text-[13px] leading-[1.6] text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
