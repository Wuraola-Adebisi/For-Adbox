import { cn } from '../../lib/cn'

type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * Placeholder wordmark. The root box is 136 x 32 at the default size, the same as the logo in
 * the Figma frame, so the real SVG can replace the inner span without moving the layout.
 * The size follows the font size, so use text-[..px] to scale it.
 */
export function Logo({ variant = 'light', className }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="AdBox"
      className={cn(
        'relative inline-block h-[0.762em] w-[3.24em] text-[42px] select-none',
        variant === 'light' ? 'text-fg' : 'text-ink',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute top-[-0.16em] left-0 inline-flex items-baseline leading-none font-extrabold whitespace-nowrap"
      >
        Adb
        <svg
          viewBox="0 0 26 26"
          className="mx-[0.04em] size-[0.62em] shrink-0"
          fill="none"
        >
          <rect x="1.5" y="1.5" width="23" height="23" rx="6.5" className="stroke-brand" strokeWidth="3" />
          <rect x="7" y="7.5" width="2.5" height="11" rx="1.25" className="fill-brand" opacity="0.55" />
          <rect x="11.75" y="7.5" width="2.5" height="11" rx="1.25" className="fill-brand" opacity="0.55" />
          <rect x="16.5" y="7.5" width="2.5" height="11" rx="1.25" className="fill-brand" opacity="0.55" />
        </svg>
        x
      </span>
    </span>
  )
}
