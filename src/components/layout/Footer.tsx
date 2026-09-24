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
      { label: "About AdBox", href: "#about" },
      { label: "Investors", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-footer-bg">
      <Container size="nav">
        <div className="grid gap-x-10 gap-y-10 pt-[57px] sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-[62.5px] flex flex-col gap-6 border-t border-line pt-[25px] pb-[41.5px] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo className="block text-[48px]" />
          </div>
          <p className="text-[13px] leading-5 text-dim">
            © 2026 AdBox Technologies Ltd. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
