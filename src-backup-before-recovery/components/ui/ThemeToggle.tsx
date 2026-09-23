import { useEffectiveTheme } from '../../lib/useEffectiveTheme'
import { cn } from '../../lib/cn'

/**
 * The site defaults to the visitor's device setting (prefers-color-scheme). This button lets
 * them override that explicitly; the choice is remembered in localStorage and applied instantly
 * on the next visit by an inline script in index.html, so there's no flash of the wrong theme.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useEffectiveTheme()

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-fg transition-colors hover:bg-fg/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
        className,
      )}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true">
          <path d="M20.7 14.9a8.6 8.6 0 0 1-10.6-10.6 1 1 0 0 0-1.3-1.2 9.7 9.7 0 1 0 13.1 13.1 1 1 0 0 0-1.2-1.3Z" />
        </svg>
      )}
    </button>
  )
}
