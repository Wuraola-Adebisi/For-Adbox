import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

const sizes = {
  page: 'max-w-page',
  wide: 'max-w-wide',
  nav: 'max-w-nav',
  narrow: 'max-w-narrow',
  problem: 'max-w-problem',
  cta: 'max-w-cta',
}

type ContainerProps = {
  size?: keyof typeof sizes
  className?: string
  /** Drop the mobile side gutter so children can run edge to edge. */
  bleed?: boolean
  children: ReactNode
}

export function Container({ size = 'page', className, bleed = false, children }: ContainerProps) {
  return (
    <div className={cn('w-full md:px-10', bleed ? 'px-0' : 'px-5')}>
      <div className={cn('mx-auto w-full', sizes[size], className)}>{children}</div>
    </div>
  )
}
