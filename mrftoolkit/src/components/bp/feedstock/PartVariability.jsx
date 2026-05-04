// src/components/bp/feedstock/PartVariability.jsx
import { useState } from 'react'
import { seasonCards, eventCards, eventTips } from '@/data/feedstock'
import Icon from '../../ui/Icon'

export default function PartVariability() {
  const [view, setView] = useState('s') // 's' seasonal, 'e' event-driven

  return (
    <div>
      <div className="fs-sec-label">Managing variability and cyclicity in feedstock</div>
      <p className="fs-callout">
        Feedstock quantity and quality in MRFs vary significantly due to seasonal patterns and
        event-driven spikes. These variations directly impact recovery rates, processing efficiency,
        and workforce planning, and should be proactively managed — not reacted to.
      </p>

      <div className="var-toggle">
        <button
          type="button"
          className={`vt-btn ${view === 's' ? 'vt-btn--on' : ''}`}
          onClick={() => setView('s')}
        >
          Seasonal variation
        </button>
        <button
          type="button"
          className={`vt-btn ${view === 'e' ? 'vt-btn--on' : ''}`}
          onClick={() => setView('e')}
        >
          Event-driven spikes
        </button>
      </div>

      {view === 's' && (
        <div className="season-grid">
          {seasonCards.map((s) => (
            <article key={s.season} className="season-card">
              <header className="season-card__head">
                <div className="season-card__icon"><Icon name={s.icon} size={18} /></div>
                <div>
                  <div className="season-card__title">{s.season}</div>
                  <span className="season-card__period">{s.period}</span>
                </div>
              </header>
              <p className="season-card__body">{s.body}</p>
              <div className="season-card__bp">
                <strong>Best practices:</strong> {s.bestPractices}
              </div>
            </article>
          ))}
        </div>
      )}

      {view === 'e' && (
        <>
          <div className="ev-grid">
            {eventCards.map((e) => (
              <article key={e.id} className="ev-card">
                <header className="ev-card__head">
                  <div className="ev-card__icon"><Icon name={e.icon} size={16} /></div>
                  <div>
                    <div className="ev-card__title">{e.title}</div>
                    <span className="ev-card__period">{e.period}</span>
                  </div>
                </header>
                <p className="ev-card__body">{e.body}</p>
                <span className="ev-card__streams">{e.streams}</span>
              </article>
            ))}
          </div>

          <div className="tips-strip">
            {eventTips.map((t) => (
              <div key={t.num} className="tip-item">
                <div className="tip-item__num">{t.num}</div>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}