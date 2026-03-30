import { cn } from '@/lib/utils';
import { BOOKING_PAYMENT_MICROCOPY } from '@/lib/trust';

type BookingTrustMicrocopyProps = {
  className?: string;
  align?: 'left' | 'center';
};

export function BookingTrustMicrocopy({ className, align = 'left' }: BookingTrustMicrocopyProps) {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <p
      className={cn(
        'mt-3 text-sm md:text-[15px] leading-relaxed text-muted/95',
        alignmentClass,
        className
      )}
    >
      {BOOKING_PAYMENT_MICROCOPY}
    </p>
  );
}
