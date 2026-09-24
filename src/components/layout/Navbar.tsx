import { useEffect, useId, useRef, useState } from 'react'
import { cn } from '../../lib/cn'
import { Button, Container, Logo, ThemeToggle } from "../ui";

// TODO: point these at real routes or section ids once they exist.
const audienceLinks = [
  { label: "Advertising Agencies", href: "#for-agencies" },
  { label: "Brands", href: "#for-brands" },
  { label: "SMEs", href: "#for-brands" },
  { label: "Dispatch Riders", href: "#become-a-rider" },
];

const linkClass =
  "font-ui text-base text-nav-link transition-colors duration-200 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand rounded-sm";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function RidersMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onPointerEnter={(event) => event.pointerType === "mouse" && setOpen(true)}
      onPointerLeave={(event) =>
        event.pointerType === "mouse" && setOpen(false)
      }
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          linkClass,
          "inline-flex cursor-pointer items-center gap-1.5",
        )}
      >
        Adbox For
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
      >
        <ul className="min-w-52 rounded-xl border border-line bg-ink/95 p-2 shadow-xl backdrop-blur-md">
          {audienceLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="group block rounded-lg px-3 py-2 font-ui transition-colors hover:bg-fg/5 focus-visible:bg-fg/5 focus-visible:outline-none"
              >
                <span className="block text-xs font-semibold text-fg group-hover:text-brand">
                  Adbox For
                </span>
                <span className="mt-0.5 block text-sm text-nav-link group-hover:text-fg">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    // Not sticky: this sits at the top of the page and scrolls away with the hero, it doesn't
    // stay pinned while scrolling (matches the Figma prototype).
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        mobileOpen ? "border-line bg-ink" : "border-transparent bg-transparent",
      )}
    >
      <Container size="nav">
        <nav
          aria-label="Primary"
          className="flex h-22 items-center justify-between"
        >
          <a
            href="#top"
            aria-label="AdBox home"
            className="flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <Logo className="text-[34px] md:text-[42px]" />
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#top" className={linkClass}>
              Home
            </a>
            <a href="#about" className={linkClass}>
              About Us
            </a>
            <RidersMenu />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button href="#contact" className="font-ui text-sm leading-6">
              Contact us
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg text-fg focus-visible:outline-2 focus-visible:outline-brand md:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      <div
        id={menuId}
        hidden={!mobileOpen}
        className="border-t border-line md:hidden"
      >
        <Container size="nav">
          <ul className="flex flex-col py-4">
            <li>
              <a
                href="#top"
                onClick={closeMobile}
                className="block rounded-lg px-3 py-3 font-ui text-base text-fg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMobile}
                className="block rounded-lg px-3 py-3 font-ui text-base text-fg"
              >
                About Us
              </a>
            </li>
            <li className="px-3 pt-3 pb-1 font-ui text-sm text-muted">
              Adbox For
            </li>
            {audienceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMobile}
                  className="block rounded-lg px-3 py-3 pl-6 font-ui text-base text-nav-link hover:text-fg"
                >
                  <span className="block text-xs font-semibold text-fg">
                    Adbox For
                  </span>
                  <span className="mt-0.5 block">{link.label}</span>
                </a>
              </li>
            ))}
            <li className="pt-4">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button
                  href="#contact"
                  onClick={closeMobile}
                  className="flex-1 font-ui text-sm leading-6"
                >
                  Contact us
                </Button>
              </div>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
