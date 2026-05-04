// src/components/bp/workforce/WfScaler.jsx
import { useState } from 'react'
import { scalerCaveat } from '@/data/workforce'
import { computeWorkforce, scalerNote } from './scalerLogic'
import Icon from '../../ui/Icon'

export default function WfScaler() {
  const [tpd, setTpd] = useState(10)
  const { roles, total } = computeWorkforce(tpd)

  return (
    <div>
      <div className="wf-caveat">{scalerCaveat}</div>

      <div className="scaler-card">
        <label className="scaler-card__label" htmlFor="tpd-slider">
          Your MRF capacity (TPD)
        </label>
        <input
          id="tpd-slider"
          type="range"
          min="2"
          max="50"
          value={tpd}
          step="1"
          onChange={(e) => setTpd(parseInt(e.target.value, 10))}
          className="scaler-slider"
        />
        <div className="scaler-card__val" aria-live="polite">
          <strong>{tpd}</strong> TPD
        </div>
      </div>

      <div className="role-grid">
        {roles.map((r) => (
          <div key={r.id} className="role-card">
            <div className="role-card__head">
              <span className="role-card__icon"><Icon name={r.icon} size={14} /></span>
              <span className="role-card__label">{r.label}</span>
            </div>
            <div className="role-card__count" aria-live="polite">{r.count}</div>
          </div>
        ))}
        <div className="role-card role-card--total">
          <div className="role-card__head">
            <span className="role-card__icon role-card__icon--total"><Icon name="UserCheck" size={14} /></span>
            <span className="role-card__label">Total headcount</span>
          </div>
          <div className="role-card__count">{total}</div>
        </div>
      </div>

      <p className="scaler-note">{scalerNote(tpd)}</p>
    </div>
  )
}