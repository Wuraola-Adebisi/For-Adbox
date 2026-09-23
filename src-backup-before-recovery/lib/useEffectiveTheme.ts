import { useEffect, useState } from 'react'
import { getEffectiveTheme, type Theme } from './theme'

/**
 * Tracks the theme actually in effect, reacting both to the visitor's manual toggle (which sets
 * documentElement's data-theme attribute) and to the OS-level setting changing when there's no
 * manual override. Anything that needs to render differently per theme in JS (rather than pure
 * CSS) should use this instead of reading prefers-color-scheme directly.
 */
export function useEffectiveTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(getEffectiveTheme)

  useEffect(() => {
    const update = () => setTheme(getEffectiveTheme())
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', update)
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => {
      media.removeEventListener('change', update)
      observer.disconnect()
    }
  }, [])

  return theme
}
