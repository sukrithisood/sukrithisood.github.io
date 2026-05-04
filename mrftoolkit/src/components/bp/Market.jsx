// src/components/bp/Market.jsx
import { useState } from 'react'
import {
  marketIntro, marketTabs,
  alignmentChips, marketKpis, dispatchPractices,
  buyerEvaluation, priceCards, marketEvents, eventFilters,
  buyerLoops,
} from '@/data/market'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import './Market.css'

function OutputTab() {
  const [activeChip, setActiveChip] = useState(null)

  return (
    <>
      <section className="market-block">
        <h5 className="market-block__title">Align processing with market demand</h5>
        <p className="market-block__sub">
          Tap any consideration to read what to optimise for in your sorting, storage, and dispatch
          decisions.
        </p>
        <div className="market-chip-row">
          {alignmentChips.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`market-chip ${activeChip === c.id ? 'market-chip--active' : ''}`}
              onClick={() => setActiveChip(activeChip === c.id ? null : c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        {activeChip && (
          <div className="market-chip-tip" role="status">
            {alignmentChips.find((c) => c.id === activeChip)?.tip}
          </div>
        )}
      </section>

      <section className="market-block">
        <h5 className="market-block__title">Key KPIs</h5>
        <div className="market-kpi-grid">
          {marketKpis.map((k) => (
            <article key={k.name} className="market-kpi-card">
              <h6 className="market-kpi-card__name">{k.name}</h6>
              <div className="market-kpi-card__formula">{k.formula}</div>
              <p className="market-kpi-card__note">{k.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="market-block">
        <h5 className="market-block__title">Dispatch best practices</h5>
        <div className="dispatch-grid">
          {dispatchPractices.map((d) => (
            <div key={d.num} className="dispatch-card">
              <span className="dispatch-card__num">{d.num}</span>
              <span className="dispatch-card__text">{d.text}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function BuyerTab() {
  const [filter, setFilter] = useState('all')
  const visibleEvents =
    filter === 'all' ? marketEvents : marketEvents.filter((e) => e.type === filter)

  return (
    <>
      <section className="market-block">
        <h5 className="market-block__title">Buyer portfolio</h5>
        <p className="market-block__sub">
          Maintain a buyer portfolio with periodic evaluation across the parameters below.
        </p>
      </section>

      <section className="market-block">
        <h5 className="market-block__title">Buyer evaluation parameters</h5>
        <div className="market-slider-grid">
          {buyerEvaluation.map((s) => (
            <div key={s.id} className="market-slider">
              <div className="market-slider__title">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="market-block">
        <h5 className="market-block__title">Price intelligence</h5>
        <div className="price-card-grid">
          {priceCards.map((p) => (
            <article key={p.title} className="price-card">
              <h6 className="price-card__title">{p.title}</h6>
              <p className="price-card__body">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="market-block">
        <h5 className="market-block__title">Market events explorer</h5>
        <div className="event-filter-row" role="tablist" aria-label="Event categories">
          {eventFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`event-pill ${filter === f.id ? 'event-pill--active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="event-list">
          {visibleEvents.length === 0 ? (
            <p className="event-empty">No events match this filter yet — more will be added.</p>
          ) : (
            visibleEvents.map((e) => (
              <article key={e.id} className="event-card">
                <div className="event-card__cell">
                  <div className="event-card__lbl">Event</div>
                  <div className="event-card__name">{e.name}</div>
                </div>
                <div className="event-card__cell">
                  <div className="event-card__lbl">Organisation</div>
                  <div>{e.org}</div>
                </div>
                <div className="event-card__cell">
                  <div className="event-card__lbl">Month / Frequency</div>
                  <div>{e.when}</div>
                </div>
                <div className="event-card__cell">
                  <div className="event-card__lbl">Type</div>
                  <span className={`event-card__type event-card__type--${e.type}`}>{e.type}</span>
                </div>
                <div className="event-card__cell event-card__cell--why">
                  <div className="event-card__lbl">Why it matters</div>
                  <p>{e.why}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  )
}

function RelationshipsTab() {
  return (
    <section className="market-block">
      <p className="market-block__sub" style={{ marginBottom: 'var(--space-3)' }}>
        Maintaining strong buyer relationships improves consistency and repeat sales.
      </p>
      <div className="buyer-card-grid">
        {buyerLoops.map((l) => (
          <article key={l.title} className="buyer-card">
            <h6 className="buyer-card__title">{l.title}</h6>
            <p className="buyer-card__text">{l.body}</p>
            <div className="loop-visual">
              {l.steps.map((s, i) => (
                <span key={s} className="loop-visual__group">
                  <span className="loop-visual__step">{s}</span>
                  {i < l.steps.length - 1 && (
                    <Icon name="ArrowRight" size={14} className="loop-visual__arrow" />
                  )}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const TabComponents = {
  output:        OutputTab,
  buyer:         BuyerTab,
  relationships: RelationshipsTab,
}

export default function Market() {
  const [activeTab, setActiveTab] = useState('output')
  const TabComponent = TabComponents[activeTab]

  return (
    <article className="bp-panel-content">
      <h3 className="bp-panel__title">Output, market linkages and sales</h3>
      <p className="bp-panel__intro">{marketIntro}</p>

      <nav className="market-tabs" aria-label="Market sub-sections">
        {marketTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`market-tab ${activeTab === t.id ? 'market-tab--active' : ''}`}
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