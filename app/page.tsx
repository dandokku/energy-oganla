import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Statement from '@/components/Statement'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <About />
      <Work />
      <Statement />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
