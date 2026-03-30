import { TRUST_BADGE_ITEMS } from '@/lib/trust'
import { TrustIcon } from '@/components/ui/TrustIcons'
import { Container } from '@/components/layout/Container'

export function TrustBadgeBar() {
  return (
    <section className="relative z-20 -mt-6 md:-mt-10" aria-label="Irish ownership and payment trust">
      <Container>
        <div className="rounded-2xl border border-primary/10 bg-gradient-to-r from-white/95 via-cream/95 to-white/95 px-4 py-4 md:px-6 md:py-5 shadow-card">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {TRUST_BADGE_ITEMS.map((item) => (
              <li key={item.id}>
                <div className="trust-badge-item group flex min-h-[64px] items-center gap-3 rounded-xl border border-transparent bg-white/70 px-4 py-3 transition-all duration-300">
                  <TrustIcon name={item.icon} />
                  <p className="text-sm md:text-base font-semibold leading-snug text-primary">{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
