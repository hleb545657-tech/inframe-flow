import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/HeaderFooter'
import { Loader } from './components/ui/Loader'
import { Hero } from './components/common/Hero'
import { PortfolioSection } from './components/common/PortfolioSection'
import {
  Services,
  Workflow,
  Cases,
  About,
  CTA,
  Contacts,
} from './components/common/Sections'
import { SmoothScroll } from './hooks/SmoothScroll'
import { CursorGlow } from './components/ui/CursorGlow'

const App = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent selection:text-background">
      <SmoothScroll />
      <CursorGlow />
      <Loader />
      <Navbar />
      <Hero />
      <PortfolioSection />
      <Services />
      <Workflow />
      <Cases />
      <About />
      <CTA />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
