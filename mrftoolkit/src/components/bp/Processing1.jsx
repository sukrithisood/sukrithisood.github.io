// src/components/bp/Processing1.jsx
import { useState } from 'react'
import {
  proc1Intro, proc1Principles, proc1Tabs,
  bottlenecks, mechModels, compareHeaders,
  maintenanceCards, maintenanceKpis,
} from '@/data/processing1'
import Icon from '../ui/Icon'
import './Processing1.css'

function BottlenecksTab() {
  return (
    <div className="proc-card-stack">
      {bottlenecks.map((b) => (
        <article key={b.title} className="proc-bottleneck">
          <header className="proc-bottleneck__head">
            <span className="proc-bottleneck__icon"><Icon name={b.icon} size={16} /></span>
            <h5 className="proc-bottleneck__title">{b.title}</h5>
          </header>
          <div className="proc-bottleneck__body">
            <div className="proc-mini-block proc-mini-block--impact">
              <div className="proc-mini-block__title">
                <Icon name="AlertTriangle" size={14} /> Impact
              </div>
              <ul className="proc-list">
                {b.impact.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div className="proc-mini-block proc-mini-block--mitigation">
              <div className="proc-mini-block__title">
                <Icon name="Check" size={14} /> Mitigation
              </div>
              <ul className="proc-list">
                {b.mitigation.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

function MechanisationTab() {
  const [openId, setOpenId] = useState(0) // first card open by default

  return (
    <div>
      {/* Comparison table — desktop */}
      <div className="proc-compare-wrap" role="region" aria-label="Mechanisation model comparison">
        <table className="proc-compare">
          <thead>
            <tr>
              {compareHeaders.map((h) => <th key={h} scope="col">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {mechModels.map((m) => (
              <tr key={m.name}>
                <th scope="row">{m.name}</th>
                <td>{m.capex}</td>
                <td>{m.labour}</td>
                <td>{m.throughput}</td>
                <td>{m.flexibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Compact comparison cards — mobile fallback */}
      <div className="proc-compare-cards">
        {mechModels.map((m) => (
          <div key={m.name} className="proc-compare-card">
            <div className="proc-compare-card__name">{m.name}</div>
            <dl className="proc-compare-card__attrs">
              <div><dt>Capex</dt><dd>{m.capex}</dd></div>
              <div><dt>Labour</dt><dd>{m.labour}</dd></div>
              <div><dt>Throughput</dt><dd>{m.throughput}</dd></div>
              <div><dt>Flexibility</dt><dd>{m.flexibility}</dd></div>
            </dl>
          </div>
        ))}
      </div>

      {/* Detailed expandable cards */}
      <div className="proc-model-grid">
        {mechModels.map((m, i) => {
          const isOpen = openId === i
          return (
            <article key={m.name} className={`proc-model ${isOpen ? 'proc-model--open' : ''}`}>
              <button
                type="button"
                className="proc-model__summary"
                onClick={() => setOpenId(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{m.name}</span>
                <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size={16} />
              </button>
              {isOpen && (
                <div className="proc-model__body">
                  <div className="proc-info">
                    <div className="proc-info__title">What it is</div>
                    <p>{m.info.what}</p>
                  </div>
                  <div className="proc-info">
                    <div className="proc-info__title">When to use</div>
                    <p>{m.info.when}</p>
                  </div>
                  <div className="proc-info">
                    <div className="proc-info__title">Advantages</div>
                    <p>{m.info.pros}</p>
                  </div>
                  <div className="proc-info">
                    <div className="proc-info__title">Limitations</div>
                    <p>{m.info.cons}</p>
                  </div>
                  <div className="proc-info proc-info--insight">
                    <div className="proc-info__title">Key operational insight</div>
                    <p>{m.info.insight}</p>
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}

function MaintenanceTab() {
  return (
    <div>
      <div className="proc-maint-grid">
        {maintenanceCards.map((c) => (
          <article key={c.title} className="proc-maint-card">
            <header className="proc-maint-card__head">
              <span className="proc-maint-card__icon"><Icon name={c.icon} size={16} /></span>
              <h5 className="proc-maint-card__title">{c.title}</h5>
            </header>
            <ul className="proc-list">
              {c.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <h5 className="proc-subheading">Key KPIs to track downtime and equipment performance</h5>
      <div className="proc-kpi-ref">
        {maintenanceKpis.map((k) => (
          <div key={k.name} className="proc-kpi-item">
            <div className="proc-kpi-item__name">{k.name}</div>
            <div className="proc-kpi-item__def">{k.def}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const TabComponents = {
  bottlenecks:   BottlenecksTab,
  mechanisation: MechanisationTab,
  maintenance:   MaintenanceTab,
}

export default function Processing1() {
  const [activeTab, setActiveTab] = useState('bottlenecks')
  const TabComponent = TabComponents[activeTab]

  return (
    <article className="bp-panel-content">
      <h3 className="bp-panel__title">Processing: workflows and machine utilisation</h3>
      <p className="bp-panel__intro">{proc1Intro}</p>

      {/* Principles strip */}
      <div className="proc-principles">
        {proc1Principles.map((p) => (
          <div key={p.title} className="proc-principle">
            <Icon name="CircleDot" size={14} className="proc-principle__icon" />
            <p>
              <strong>{p.title}</strong> {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* Tab nav */}
      <nav className="proc-tabs" aria-label="Processing sub-sections">
        {proc1Tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`proc-tab ${activeTab === t.id ? 'proc-tab--active' : ''}`}
            onClick={() => setActiveTab(t.id)}
            aria-pressed={activeTab === t.id}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <TabComponent />
    </article>
  )
}