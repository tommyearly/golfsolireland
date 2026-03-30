import { Container } from '@/components/layout/Container'

export function TrustedIrishService() {
  return (
    <section
      className="py-20 md:py-24 bg-background"
      aria-labelledby="trusted-irish-service-heading"
    >
      <Container>
        <div className="reveal trust-service-fade mx-auto max-w-[700px] rounded-2xl border border-primary/10 bg-white/90 px-6 py-10 md:px-10 md:py-12 text-center shadow-card">
          <h2
            id="trusted-irish-service-heading"
            className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-primary"
          >
            Trusted Irish Service
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted">
            We are a <span className="irish-owned-glow font-semibold text-primary">100% Irish owned and operated</span> business.
            All bookings and payments are handled securely within Ireland, giving you full transparency and peace of mind.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
            To ensure availability and deliver a premium service, all bookings are confirmed with advance payment.
          </p>
        </div>
      </Container>
    </section>
  )
}
