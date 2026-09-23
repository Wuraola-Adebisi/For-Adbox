import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

const variants = {
  primary: 'bg-brand text-on-brand hover:brightness-110',
  secondary: 'bg-navy text-white hover:brightness-125',
  outline: 'border border-fg/15 text-fg hover:bg-fg/5',
}

const sizes = {
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

type CommonProps = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  arrow?: boolean
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined }

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold',
    'transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
    variants[variant],
    sizes[size],
    className,
  )
  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
