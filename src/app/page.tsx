import Hero from '@/components/Hero'
import PromotionSection from '@/components/PromotionSection'
import Service from '@/components/Service'
import UniqueFeatures from '@/components/UniqueFeatures'
import Features from '@/components/Features'
import Merchants from '@/components/Merchants'
import FAQ from '@/components/FAQ'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PromotionSection />
      <Service />
      <UniqueFeatures />
      <Features />
      <Merchants />
      <FAQ />
      <Download />
      <Footer />
    </main>
  )
}

