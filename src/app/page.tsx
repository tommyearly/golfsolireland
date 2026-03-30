import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { TrustBadgeBar } from '@/components/sections/TrustBadgeBar';

const GolfPackages = dynamic(() => import('@/components/sections/GolfPackages').then((m) => ({ default: m.GolfPackages })), { ssr: true });
const RepeatHeadline = dynamic(() => import('@/components/sections/RepeatHeadline').then((m) => ({ default: m.RepeatHeadline })), { ssr: true });
const Statement = dynamic(() => import('@/components/sections/Statement').then((m) => ({ default: m.Statement })), { ssr: true });
const GolfCourses = dynamic(() => import('@/components/sections/GolfCourses').then((m) => ({ default: m.GolfCourses })), { ssr: true });
const Accommodation = dynamic(() => import('@/components/sections/Accommodation').then((m) => ({ default: m.Accommodation })), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then((m) => ({ default: m.HowItWorks })), { ssr: true });
const TrustedIrishService = dynamic(() => import('@/components/sections/TrustedIrishService').then((m) => ({ default: m.TrustedIrishService })), { ssr: true });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then((m) => ({ default: m.Testimonials })), { ssr: true });
const Newsletter = dynamic(() => import('@/components/sections/Newsletter').then((m) => ({ default: m.Newsletter })), { ssr: true });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then((m) => ({ default: m.ContactSection })), { ssr: true });

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadgeBar />
      <GolfPackages />
      <RepeatHeadline />
      <Statement />
      <GolfCourses />
      <Accommodation />
      <HowItWorks />
      <TrustedIrishService />
      <Testimonials />
      <Newsletter />
      <ContactSection />
    </>
  );
}
