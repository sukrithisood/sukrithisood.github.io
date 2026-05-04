// src/components/bp/feedstock/PartSources.jsx
import { useState } from 'react'
import { feedstockSources } from '@/data/feedstock'
import Icon from '../../ui/Icon'

export default function PartSources() {
  const [open, setOpen] = useState(null)
  const toggle = (id) => setOpen((cur) => (cur === id ? null : id))

  return (
    <div>
      <div className="fs-sec-label">Source-wise Feedstock Profile</div>
      <p className="fs-hint">Click any source to expand its operational profile, challenges, and field tip.</p>
      <div className="src-grid">
        {feedstockSources.map((s) => {
          const isOpen = open === s.id
          return (
            <article key={s.id} className={`src-card ${isOpen ? 'src-card--open' : ''}`}>
              <button
                type="button"
                className="src-card__head"
                onClick={() => toggle(s.id)}
                aria-expanded={isOpen}
              >
                <span className={`src-card__icon src-card__icon--${s.tone}`}>
                  <Icon name={s.icon} size={18} />
                </span>
                <div className="src-card__hd-text">
                  <div className="src-card__name">{s.name}</div>
                  <span className={`src-card__tag src-card__tag--${s.tone}`}>{s.tag}</span>
                </div>
                <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size={16} className="src-card__chev" />
              </button>
              {isOpen && (
                <div className="src-card__expand">
                  <div className="src-card__cell">
                    <div className="src-card__cell-lbl">Profile</div>
                    <div className="src-card__cell-val">{s.profile}</div>
                  </div>
                  <div className="src-card__cell">
                    <div className="src-card__cell-lbl">Challenges</div>
                    <div className="src-card__cell-val">{s.challenges}</div>
                  </div>
                  <div className="src-card__field-tip">
                    <Icon name="Lightbulb" size={14} />
                    <div>
                      <strong>Field tip:</strong> {s.fieldTip}
                    </div>
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