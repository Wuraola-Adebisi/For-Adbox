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
  children: ReactNode
}

export function Container({ size = 'page', className, children }: ContainerProps) {
  return (
    <div className="w-full px-6 md:px-10">
      <div className={cn('mx-auto w-full', sizes[size], className)}>{children}</div>
    </div>
  )
}
