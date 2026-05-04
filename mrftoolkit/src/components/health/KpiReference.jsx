// src/components/health/KpiReference.jsx
import { useState, useMemo } from 'react'
import { kpis, kpiCategories } from '@/data/kpis'
import Icon from '../ui/Icon'

const bandLabel = { g: 'Good', a: 'Watch', r: 'Risk' }

export default function KpiReference() {
  const [activeCat, setActiveCat] = useState('all')

  const visible = useMemo(
    () => (activeCat === 'all' ? kpis : kpis.filter((k) => k.cat === activeCat)),
    [activeCat]
  )

  return (
    <div className="kpi-ref">
      <div className="kpi-ref__head">
        <h3 className="kpi-ref__title">All 15 indicators — benchmarks and guidance</h3>
      </div>

      <div className="kpi-ref__tabs" role="tablist" aria-label="KPI categories">
        {kpiCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={activeCat === c.id}
            className={`kpi-tab ${activeCat === c.id ? 'kpi-tab--active' : ''}`}
            onClick={() => setActiveCat(c.id)}
          >
            {c.label} <span className="kpi-tab__count">({c.count})</span>
          </button>
        ))}
      </div>

      <div className="kpi-grid">
        {visible.map((k) => (
          <article key={k.title} className="kpi-card">
            <header className="kpi-card__top">
              <h4 className="kpi-card__title">{k.title}</h4>
              <div className="kpi-card__icon">
                <Icon name={k.icon} size={16} />
              </div>
            </header>
            <div className="kpi-card__formula">{k.formula}</div>
            <p className="kpi-card__desc">{k.desc}</p>
            <div className="kpi-card__bands">
              {k.bands.map(([c, t, b]) => (
                <div key={t} className={`kpi-band kpi-band--${c}`}>
                  <div className="kpi-band__top">{t}</div>
                  <div className="kpi-band__bot">{b}</div>
                  <span className="sr-only">{bandLabel[c]} zone</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}