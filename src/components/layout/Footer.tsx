import { Container, Logo } from '../ui'

// TODO: point these at real routes or section ids once they exist.
const columns = [
  {
    title: "Platform",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Live Network", href: "#live-network" },
      { label: "Campaign Codes", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "For Brands",
    links: [
      { label: "Advertise", href: "#for-who-brands" },
      { label: "Contextual Targeting", href: "#contextual-targeting" },
      { label: "Case Studies", href: "#" },
      { label: "Request a Demo", href: "#" },
    ],
  },
  {
    title: "For Riders",
    links: [
      { label: "Become a Rider", href: "#for-who-riders" },
      { label: "Rider Dashboard", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About adbox", href: "#about" },
      { label: "Investors", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-transparent">
      <Container size="nav">
        <div className="pt-10 sm:hidden">
          <Logo className="block text-[41px]" />
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 pt-[41px] sm:gap-x-10 sm:gap-y-10 sm:pt-[57px] lg:grid-cols-4">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[11px] leading-4 font-semibold uppercase tracking-[0.08em] text-fg">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-[11px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block text-sm leading-5 text-muted transition-colors duration-200 hover:text-fg focus-visible:text-fg focus-visible:outline-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mx-[18px] mt-[51px] flex flex-col gap-6 border-t border-line pt-5 pb-[38px] sm:mx-0 sm:mt-[62.5px] sm:pt-[25px] sm:pb-[41.5px] sm:flex-row sm:items-center sm:justify-between">
          <div className="hidden sm:block">
            <Logo className="block text-[48px]" />
          </div>
          <p className="-mx-2 text-center text-[13px] leading-5 text-dim sm:mx-0 sm:text-left">
            © 2026 adbox Technologies Ltd. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
