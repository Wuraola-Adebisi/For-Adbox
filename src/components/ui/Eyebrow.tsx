import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type EyebrowProps = {
  className?: string
  children: ReactNode
}

export function Eyebrow({ className, children }: EyebrowProps) {
  return (
    <p className={cn('text-xs font-semibold uppercase tracking-[0.11em] text-brand', className)}>
      {children}
    </p>
  )
}
