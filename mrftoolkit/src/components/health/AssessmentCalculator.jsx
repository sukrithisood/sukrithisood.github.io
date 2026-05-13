// src/components/health/AssessmentCalculator.jsx
import { useState } from 'react'
import { assessConfig } from '@/data/kpis'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

function classifyZone(value, cfg) {
  // Returns 'g' | 'a' | 'r' (green / amber / red)
  if (!cfg.inverted) {
    if (value >= cfg.green[0] && value <= cfg.green[1]) return 'g'
    if (value >= cfg.amber[0] && value <= cfg.amber[1]) return 'a'
    return 'r'
  }
  // Inverted: lower is better
  if (value <= cfg.green[1]) return 'g'
  if (value <= cfg.amber[1]) return 'a'
  return 'r'
}

const zoneLabel = { g: 'On track', a: 'Needs attention', r: 'Act now' }

export default function AssessmentCalculator() {
  const [values, setValues] = useState({})
  const [results, setResults] = useState(null)

  const handleChange = (id, v) => setValues((s) => ({ ...s, [id]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const out = []
    assessConfig.forEach((cfg) => {
      const raw = values[cfg.id]
      if (raw === undefined || raw === '') return
      const v = parseFloat(raw)
      if (Number.isNaN(v)) return
      out.push({ ...cfg, value: v, zone: classifyZone(v, cfg) })
    })
    if (out.length === 0) return
    setResults(out)
  }

  const handleReset = () => setResults(null)

  return (
    <div className="assess">
      {!results && (
        <form className="assess__form" onSubmit={handleSubmit}>
          <div className="assess__head">
            <h3 className="assess__title">Quick self-assessment</h3>
            <p className="assess__sub">
              Fill any or all fields - we&rsquo;ll show your performance zone for each value entered.
            </p>
          </div>
          <div className="assess__grid">
            {assessConfig.map((cfg) => (
              <label key={cfg.id} className="assess__field">
                <span className="assess__label">
                  {cfg.label} <span className="assess__unit">({cfg.unit})</span>
                </span>
                <input
                  type="number"
                  inputMode="decimal"
                  step="any"
                  placeholder={cfg.placeholder}
                  value={values[cfg.id] ?? ''}
                  onChange={(e) => handleChange(cfg.id, e.target.value)}
                  className="assess__input"
                />
              </label>
            ))}
          </div>
          <div className="assess__footer">
            <Button type="submit" variant="primary" size="md" iconRight="ArrowRight">
              Show my MRF&rsquo;s performance zones
            </Button>
            <span className="assess__hint">
              Partial input is fine, results show for values entered only. Indicative only for an Urban, mid-sized (~50 TPD) MRF.
            </span>
          </div>
        </form>
      )}

      {results && (
        <div className="assess__results">
          <div className="assess__results-head">
            <button type="button" className="assess__back" onClick={handleReset}>
              <Icon name="ArrowLeft" size={14} /> Re-enter values
            </button>
            <h3 className="assess__results-title">Your MRF&rsquo;s performance zones</h3>
          </div>
          <div className="assess__results-grid">
            {results.map((r) => (
              <div key={r.id} className={`zone-card zone-card--${r.zone}`}>
                <div className="zone-card__label">{r.label}</div>
                <div className="zone-card__value">
                  {r.value}
                  <span className="zone-card__unit">{r.unit}</span>
                </div>
                <span className="zone-card__pill">{zoneLabel[r.zone]}</span>
                {r.zone !== 'g' && (
                  <p className="zone-card__tip">{r.tip}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}