import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

const tones = {
  neutral: 'border-line-strong text-muted',
  brand: 'border-line text-brand',
}

type PillProps = {
  tone?: keyof typeof tones
  className?: string
  children: ReactNode
}

export function Pill({ tone = 'neutral', className, children }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex h-6 items-center rounded-full border px-3 text-[11px] font-semibold uppercase tracking-[0.08em]',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
