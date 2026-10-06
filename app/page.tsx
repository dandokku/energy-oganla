import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  )
}
