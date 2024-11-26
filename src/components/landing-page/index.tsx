import { About } from '@/components/landing-page/About'
import { Footer } from '@/components/landing-page/Footer'
import { Hero } from '@/components/landing-page/Hero'
import { HowItWorks } from '@/components/landing-page/HowItWorks'

export function LandingPage() {
  return (
    <div className="my-24 flex w-[90%] max-w-3xl flex-col items-center space-y-32 md:w-[80%] lg:w-[70%]">
      <Hero />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  )
}
