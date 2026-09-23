import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

const sizes = {
  // Section headings: 50px at a 1440px viewport, scaling down on smaller screens.
  section: 'text-[length:clamp(1.875rem,3.47vw,3.125rem)] leading-[1.05] font-normal md:leading-[0.94]',
  // Headings inside the For Brands and For Riders panels.
  panel: 'text-[length:clamp(1.75rem,2.8vw,2.5rem)] leading-[1.18] font-normal tracking-[-0.025em]',
  hero: 'text-[length:clamp(2.5rem,6.67vw,6rem)] leading-[1.083] font-bold',
}

type SectionHeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
  size?: keyof typeof sizes
  className?: string
  children: ReactNode
}

export function SectionHeading({ as: Tag = 'h2', size = 'section', className, children }: SectionHeadingProps) {
  return <Tag className={cn(sizes[size], className)}>{children}</Tag>
}

/** Cyan highlighted word(s) inside a heading. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-brand">{children}</span>
}
