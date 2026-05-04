// src/components/bp/Feedstock.jsx
import { useState } from 'react'
import { feedstockIntro, feedstockTabs } from '@/data/feedstock'
import PartSources from './feedstock/PartSources'
import PartEngagement from './feedstock/PartEngagement'
import PartVariability from './feedstock/PartVariability'
import PartIntake from './feedstock/PartIntake'
import './Feedstock.css'

const PartComponents = {
  a: PartSources,
  b: PartEngagement,
  c: PartVariability,
  d: PartIntake,
}

export default function Feedstock() {
  const [activePart, setActivePart] = useState('a')
  const PartComponent = PartComponents[activePart]

  return (
    <article className="bp-panel-content">
      <h3 className="bp-panel__title">Feedstock sourcing and management</h3>
      <p className="bp-panel__intro">{feedstockIntro}</p>

      <nav className="part-tabs" aria-label="Feedstock sub-sections">
        {feedstockTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`pt ${activePart === t.id ? 'pt--on' : ''}`}
            onClick={() => setActivePart(t.id)}
            aria-pressed={activePart === t.id}
          >
            <span className="pt__code">{t.code}</span>
            <span className="pt__sep">·</span>
            <span className="pt__label">{t.label}</span>
          </button>
        ))}
      </nav>

      <PartComponent />
    </article>
  )
}