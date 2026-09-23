import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ContextualTargeting } from './sections/ContextualTargeting'
import { FinalCta } from './sections/FinalCta'
import { ForWho } from './sections/ForWho'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { LiveNetwork } from './sections/LiveNetwork'
import { Problem } from './sections/Problem'
import { ValueStrip } from './sections/ValueStrip'
import { WhyAdbox } from './sections/WhyAdbox'

// ForBrandsAndRiders is retired: the new design has no For Brands / For Riders sections.
// Live Network now follows For who (ad agencies) directly.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <Problem />
        <ForWho />
        <LiveNetwork />
        <HowItWorks />
        <ContextualTargeting />
        <WhyAdbox />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
