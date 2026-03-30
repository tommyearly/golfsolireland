import { cn } from '@/lib/utils'

type TrustIconName = 'irish' | 'secure' | 'verified'

type TrustIconProps = {
  name: TrustIconName
  className?: string
}

export function TrustIcon({ name, className }: TrustIconProps) {
  if (name === 'irish') {
    return (
      <span
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-lg',
          className
        )}
        aria-hidden
      >
        🇮🇪
      </span>
    )
  }

  if (name === 'secure') {
    return (
      <span
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary',
          className
        )}
        aria-hidden
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l7 4v6c0 5-3.8 9.6-7 10-3.2-.4-7-5-7-10V6l7-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary',
        className
      )}
      aria-hidden
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  )
}
