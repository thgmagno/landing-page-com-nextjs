import { Hero } from '@/components/landing-page/Hero'
import { HowItWorks } from '@/components/landing-page/HowItWorks'
import { About } from '@/components/landing-page/About'
import { Footer } from '@/components/landing-page/Footer'

export function LandingPage() {
  return (
    <div className="flex flex-col items-center w-[90%] md:w-[80%] lg:w-[70%] max-w-3xl space-y-32 my-24">
      <Hero />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  )
}
