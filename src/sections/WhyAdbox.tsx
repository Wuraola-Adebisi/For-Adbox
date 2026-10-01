import { cn } from '../lib/cn'
import { Accent, Eyebrow, Section, SectionHeading } from '../components/ui'

const features = [
  { title: 'Mobile by Design', body: "Your advertising isn't tied to one location." },
  { title: 'Location-Aware', body: 'Campaigns can be connected to where your audience actually is.' },
  { title: 'Digitally Managed', body: 'Manage campaigns without physically replacing advertising materials.' },
  { title: 'Highly Visible', body: 'Three LED screens create a powerful physical presence.' },
  { title: 'Scalable Network', body: 'Expand reach by expanding the rider network.' },
  { title: 'Built for Data', body: 'Turn physical advertising activity into measurable campaign intelligence.' },
]

export function WhyAdbox() {
  return (
    // id="about" is temporary: the About Us nav link needs a real destination.
    <Section tone="ink" id="about" className="bg-why-bg pt-[92px] pb-16 md:pt-[182px] md:pb-[96.5px]">
      <Eyebrow>Why adbox</Eyebrow>
      <SectionHeading className="mt-6 max-w-[700px] leading-10 text-fg md:mt-[25.5px] md:leading-[56px]">
        <Accent>Advertising</Accent> designed for a{" "}
        <Accent>moving world</Accent>.
      </SectionHeading>
      <p className="mt-[27px] pl-2 text-base leading-6 font-medium text-muted md:mt-[28.4px] md:pl-0">
        Your brand moves. Your audience sees it.
      </p>

      <ul className="mt-[49px] grid gap-y-6 md:grid-cols-[340fr_372fr_348fr] md:gap-y-[25px]">
        {features.map((feature, index) => (
          <li
            key={feature.title}
            className={cn(
              "flex h-[109px] flex-col justify-center border-l border-brand/22 pr-8 pl-[15px] md:block md:h-auto md:pt-px",
              index % 3 === 0 ? "md:border-l-0 md:pl-0" : "md:pl-4",
            )}
          >
            <span className="block font-mono text-xs leading-4 text-dim slashed-zero">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-[15px] text-[15px] leading-5 font-bold text-fg">
              {feature.title}
            </h3>
            <p className="mt-2.5 max-w-[294px] text-sm leading-[23px] text-muted">
              {feature.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
