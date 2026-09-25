import { Button, Pill, Section, SectionHeading } from '../components/ui'

const brandUses = [
  { title: 'Brand Awareness', body: 'Keep your brand visible where your customers spend their time.' },
  { title: 'Product Launches', body: 'Create attention around new products and services.' },
  { title: 'Local Promotions', body: 'Reach customers close to your stores, outlets or activation points.' },
  { title: 'Events & Activations', body: 'Turn surrounding streets into an extension of your campaign.' },
  { title: 'Always-On Campaigns', body: 'Maintain consistent visibility across your target locations.' },
]

const riderPerks = [
  { title: 'Pay/km', body: 'Earnings per kilometre ridden' },
  { title: 'Real-time', body: 'Live payout tracking' },
  { title: 'No lock-in', body: 'Join or leave the network freely' },
  { title: 'Growing', body: 'Network expanding monthly' },
]

export function ForBrandsAndRiders() {
  return (
    <Section tone="surface" id="brands-riders" className="pt-0 pb-[97px]">
      <div className="flex flex-col gap-[64px]">
        <div
          id="for-brands"
          className="rounded-[20px] border border-line-strong bg-raised px-6 py-10 md:px-12 md:py-[52px]"
        >
          <div className="grid gap-10 md:grid-cols-[449fr_481fr] md:gap-8">
            <div>
              <Pill className="relative -top-px">For brands</Pill>
              <SectionHeading size="panel" className="mt-[23.5px] text-fg">
                Make every impression count.
              </SectionHeading>
              <p className="mt-5 text-base leading-8 text-muted">
                Whether you're launching a product, driving foot traffic,
                building awareness or owning a location — adbox puts your brand
                directly into the physical journeys of your audience.
              </p>
              <Button
                href="#contact"
                arrow
                className="mt-[31px] text-[15px] font-bold"
              >
                Advertise with adbox
              </Button>
            </div>

            <ul className="flex flex-col gap-3">
              {brandUses.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-[14px] border border-item-line bg-item px-[18px] py-[16.5px]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  <div>
                    <h3 className="text-sm leading-5 font-bold text-fg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          id="become-a-rider"
          className="rounded-[20px] border border-line bg-card px-6 py-10 md:px-12 md:pt-[64px] md:pb-[64.5px]"
        >
          <div className="grid gap-10 md:grid-cols-[449fr_481fr] md:items-center md:gap-8">
            <div>
              <Pill tone="brand">For riders</Pill>
              <SectionHeading size="panel" className="mt-[23px] text-fg">
                Your route can do more.
              </SectionHeading>
              <p className="mt-[22.5px] text-base leading-8 text-muted">
                adbox gives riders the opportunity to turn the journeys they
                already make into an additional source of value.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                Equip your carrier box with adbox technology, stay on the move
                and participate in a growing network of mobile advertising.
              </p>
              <p className="mt-7 text-xl leading-7 font-bold tracking-[-0.01em] text-fg">
                Ride. Display. Earn.
              </p>
              <Button
                href="#contact"
                arrow
                className="mt-[33px] text-[15px] font-bold"
              >
                Become an adbox Rider
              </Button>
            </div>

            <ul className="grid grid-cols-2 gap-[12.5px] md:px-2.5">
              {riderPerks.map((perk) => (
                <li
                  key={perk.title}
                  className="rounded-[14px] border border-tile-line bg-tile px-2 pt-[20.5px] pb-[19px] text-center"
                >
                  <h3 className="text-sm leading-6 font-semibold text-brand">
                    {perk.title}
                  </h3>
                  <p className="mt-[5.5px] text-sm leading-5 text-muted">
                    {perk.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
