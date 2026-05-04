// src/components/panels/BestPracticesPanel.jsx
import { useState } from 'react'
import { bpItems } from '@/data/bp'
import Processing2 from '../bp/Processing2'
import Market from '../bp/Market'
import Processing1 from '../bp/Processing1'
import Workforce from '../bp/Workforce'
import Feedstock from '../bp/Feedstock'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import Governance from '../bp/Governance'
import Facility from '../bp/Facility'
import Scale from '../bp/Scale'
import './BestPracticesPanel.css'

// Map of panel id → component. Heavy interactive panels still show
// "Coming soon" until we ship them in the next message.
const PanelComponents = {
  gov: Governance,
  facility: Facility,
  feedstock: Feedstock,
  workforce: Workforce,
  proc1: Processing1,
  proc2: Processing2,    // ← new
  market: Market,        // ← new
  scale: Scale,
}

function ComingSoon({ label }) {
  return (
    <div className="bp-soon">
      <Icon name="Construction" size={28} />
      <h3 className="bp-soon__title">{label}</h3>
      <p className="bp-soon__body">
        This sub-section is being prepared and will be live soon. In the meantime, the
        Health Indicators above and the Risk Matrix below cover the day-to-day
        decision-making that this section supports.
      </p>
    </div>
  )
}

export default function BestPracticesPanel() {
  const [activeId, setActiveId] = useState('gov')
  const [mobileOpen, setMobileOpen] = useState(false)

  const activeItem = bpItems.find((b) => b.id === activeId)
  const Component = PanelComponents[activeId]

  const handleSelect = (id) => {
    setActiveId(id)
    setMobileOpen(false)
  }

  return (
    <section id="sec-bp" className="panel panel--bp">
      <Container>
        <SectionHeader
          eyebrow="Best Practices"
          title="Field-validated operational guidance"
          subtitle="Select a sub-section from the left panel. Each section draws on insights from facilities across urban, peri-urban, rural, hilly, and coastal contexts in India."
        />

        <div className="bp-layout">
          {/* Mobile selector — replaces the sidebar on narrow screens */}
          <div className="bp-mobile-selector">
            <button
              type="button"
              className="bp-mobile-trigger"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="bp-mobile-trigger__num">{activeItem.num}</span>
              <span className="bp-mobile-trigger__label">{activeItem.label}</span>
              <Icon name={mobileOpen ? 'ChevronUp' : 'ChevronDown'} size={18} />
            </button>
            {mobileOpen && (
              <ul className="bp-mobile-list">
                {bpItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`bp-mobile-item ${activeId === item.id ? 'bp-mobile-item--active' : ''}`}
                      onClick={() => handleSelect(item.id)}
                    >
                      <span className="bp-mobile-item__num">{item.num}</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop sidebar */}
          <nav className="bp-sidebar" aria-label="Best practice sub-sections">
            <ul>
              {bpItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`bp-item ${activeId === item.id ? 'bp-item--active' : ''}`}
                    onClick={() => handleSelect(item.id)}
                    aria-current={activeId === item.id ? 'true' : undefined}
                  >
                    <span className="bp-item__num">{item.num}</span>
                    <span className="bp-item__label">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Active panel content */}
          <div className="bp-content">
            {Component ? <Component /> : <ComingSoon label={activeItem.label} />}
          </div>
        </div>
      </Container>
    </section>
  )
}