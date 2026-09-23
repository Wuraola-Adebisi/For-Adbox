import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Container } from './Container'

const tones = {
  ink: 'bg-ink text-fg',
  surface: 'bg-surface text-fg',
}

type SectionProps = {
  tone?: keyof typeof tones
  id?: string
  className?: string
  containerSize?: 'page' | 'wide' | 'nav' | 'narrow' | 'problem' | 'cta'
  containerClassName?: string
  children: ReactNode
}

export function Section({
  tone = 'ink',
  id,
  className,
  containerSize = 'page',
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn(tones[tone], 'pt-[182px] pb-24', className)}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
