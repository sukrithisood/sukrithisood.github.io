// src/components/bp/feedstock/PartIntake.jsx
import { useState } from 'react'
import { gateSignals, abcStandard, wrnFields, rejectProtocols } from '@/data/feedstock'
import { classifyGrade } from './gradeLogic'
import Icon from '../../ui/Icon'

export default function PartIntake() {
  const [selected, setSelected] = useState(() => new Set())

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const result = classifyGrade(selected)

  return (
    <div>
      <div className="fs-sec-label">Handling of incoming feedstock at the MRF — best practices</div>
      <p className="fs-intro-strip">
        Most MRFs treat incoming waste as an undifferentiated flow, with limited visibility beyond
        total weight. This creates a critical blind spot — facilities cannot link input quality to
        operational performance, recovery rates, or revenue outcomes. Introducing lightweight but
        structured intake controls closes this gap.
      </p>

      <h5 className="fs-block-title">Gate grading simulator — what grade does this load receive?</h5>
      <div className="load-builder">
        <p className="load-builder__lbl">Toggle the signals you observe in the incoming load</p>
        <div className="signal-grid">
          {gateSignals.map((s) => {
            const on = selected.has(s.id)
            const cls = on
              ? `sig sig--on ${s.neg ? 'sig--on-neg' : 'sig--on-pos'}`
              : 'sig'
            return (
              <button
                key={s.id}
                type="button"
                className={cls}
                onClick={() => toggle(s.id)}
                aria-pressed={on}
              >
                <Icon name={s.icon} size={18} className="sig__icon" />
                <span className="sig__label">{s.label}</span>
              </button>
            )
          })}
        </div>
        <div className="sig-count">
          Signals selected: <strong>{selected.size}</strong> of {gateSignals.length}
        </div>

        <div className={`grade-result ${result ? `grade-result--${result.tone}` : 'grade-result--none'}`}>
          {!result ? (
            <p className="grade-result__none">Toggle signals above to see the grade recommendation.</p>
          ) : (
            <>
              <span className={`grade-result__badge grade-result__badge--${result.tone}`}>
                Grade {result.grade}{result.escalate ? ' — escalate immediately' : ''}
              </span>
              <h6 className="grade-result__title">{result.title}</h6>
              <p className="grade-result__body">{result.body}</p>
              <div className="grade-result__action">{result.action} →</div>
            </>
          )}
        </div>

        <p className="sim-note">
          For facilities with high vehicle frequency, a "quick dip" sampling protocol — opening
          2–3 bags from the top of the load for a 30-second visual check — is sufficient. Laminate
          A/B/C photo reference cards with real examples and post them at the entry gate.
        </p>
      </div>

      <h5 className="fs-block-title">A/B/C grading standard</h5>
      <div className="grade-abc">
        {abcStandard.map((g) => (
          <article key={g.grade} className={`gabc gabc--${g.tone}`}>
            <span className={`gabc__badge gabc__badge--${g.tone}`}>Grade {g.grade}</span>
            <div className="gabc__title">{g.title}</div>
            <p className="gabc__body">{g.body}</p>
          </article>
        ))}
      </div>

      <h5 className="fs-block-title">Waste receipt note (WRN) — moving beyond weight-only tracking</h5>
      <div className="wrn-box">
        <p className="wrn-sub">
          MRFs should adopt a WRN system that captures actionable information at intake. This is
          the anchor for all downstream traceability — buyer complaints, EPR documentation, and
          quality audits trace back to it. A trained gate supervisor can complete a WRN in 2–3
          minutes per vehicle.
        </p>
        <div className="wrn-grid">
          {wrnFields.map((f) => (
            <div key={f.label} className="wrn-field">
              <div className="wrn-field__lbl">{f.label}</div>
              <div className="wrn-field__val">{f.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rej-box">
        <div className="rej-box__title">
          <Icon name="XCircle" size={16} />
          Protocols for reject and non-processable waste
        </div>
        <p className="rej-box__sub">
          Define clear SOPs for diversion or rejection of specific waste streams. Display them at
          the gate with the escalation and accountability matrix including named contacts. Maintain
          records of rejected loads by source — recurring rejections must trigger an upstream
          conversation, not just a repeated gate rejection.
        </p>
        <div className="rej-grid">
          {rejectProtocols.map((r) => (
            <div key={r.name} className="rej-cell">
              <div className="rej-cell__type">Reject type</div>
              <div className="rej-cell__name">{r.name}</div>
              <div className="rej-cell__action">{r.action}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}