import { cn } from '../../lib/cn'

type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'light', className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex w-[3.42em] shrink-0 select-none",
        variant === "light" ? "text-fg" : "text-ink",
        className,
      )}
    >
      <img
        src="/adbox-logo-dark.png"
        alt="AdBox Technologies"
        className="only-dark h-auto w-full"
      />
      <img
        src="/adbox-logo-light.png"
        alt=""
        aria-hidden="true"
        className="only-light h-auto w-full"
      />
    </span>
  );
}
