import { cn } from '../../lib/cn'

type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * The real adbox mark: lowercase "adb" + the icon (colours traced from the client's exported
 * PNG) + "x". The wordmark stays live text (not a raster image) so it follows the site's
 * light/dark theme automatically instead of needing a separate logo file per mode.
 * The size follows the font size, so use text-[..px] to scale it.
 */
export function Logo({ variant = 'light', className }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="adbox"
      className={cn(
        'relative inline-block h-[0.762em] w-[3.24em] text-[42px] select-none',
        variant === 'light' ? 'text-fg' : 'text-ink',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute top-[-0.16em] left-0 inline-flex items-baseline leading-none font-extrabold whitespace-nowrap lowercase"
      >
        adb
        <svg viewBox="0 0 32 32" className="mx-[0.04em] size-[0.62em] shrink-0">
          <rect x="1.3" y="1.3" width="29.4" height="29.4" rx="5.8" fill="#1e2829" stroke="#00bdd6" strokeWidth="2.6" />
          <rect x="7.28" y="9.5" width="2.71" height="14" rx="1.35" fill="#106f7b" />
          <rect x="12.36" y="9.5" width="2.71" height="14" rx="1.35" fill="#008d9f" />
          <rect x="17.44" y="9.5" width="2.71" height="14" rx="1.35" fill="#00bdd6" />
          <rect x="22.52" y="9.5" width="2.71" height="14" rx="1.35" fill="#90f2ff" />
        </svg>
        x
      </span>
    </span>
  )
}
