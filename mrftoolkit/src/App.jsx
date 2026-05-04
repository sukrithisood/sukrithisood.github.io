// src/App.jsx
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HealthPanel from '@/components/panels/HealthPanel'
import BestPracticesPanel from '@/components/panels/BestPracticesPanel'
import RiskPanel from '@/components/panels/RiskPanel'
import ToolsPanel from '@/components/panels/ToolsPanel'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <Nav />

      <main id="main">
        <Hero />
        <HealthPanel />
        <BestPracticesPanel />
        <RiskPanel />
        <ToolsPanel />
      </main>

      <Footer />
    </>
  )
}