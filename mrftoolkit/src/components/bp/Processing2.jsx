// src/components/bp/Processing2.jsx
import { proc2Intro, qcStations, specialCards, protocolChecklist } from '@/data/processing2'
import Icon from '../ui/Icon'
import './Processing2.css'

export default function Processing2() {
  return (
    <article className="bp-panel-content">
      <h3 className="bp-panel__title">Processing: quality control and material handling</h3>
      <p className="bp-panel__intro">{proc2Intro}</p>

      {/* QC stations */}
      <h4 className="bp-subheading">Quality control across sorting, storage, and baling</h4>
      <div className="qc-grid">
        {qcStations.map((s) => (
          <article key={s.num} className="qc-card">
            <div className="qc-card__top">
              <div className="qc-card__num-row">
                <span className="qc-card__num">{s.num}</span>
                <span className="qc-card__stage">{s.stage}</span>
              </div>
              <h5 className="qc-card__title">{s.title}</h5>
              <p className="qc-card__body">{s.body}</p>
            </div>
            <div className="qc-card__foot">{s.foot}</div>
          </article>
        ))}
      </div>

      <div className="bp-section-divider" />

      {/* Special handling */}
      <h4 className="bp-subheading">Special material handling protocols</h4>
      <div className="sp-grid">
        {specialCards.map((c) => (
          <article key={c.title} className={`sp-card sp-card--${c.tone}`}>
            <div className={`sp-card__icon sp-card__icon--${c.tone}`}>
              <Icon name={c.icon} size={16} />
            </div>
            <h5 className="sp-card__title">{c.title}</h5>
            <p className="sp-card__body">{c.body}</p>
            <span className={`sp-card__tag sp-card__tag--${c.tone}`}>{c.tag}</span>
          </article>
        ))}
      </div>

      {/* Protocol checklist */}
      <div className="fs-sec-label" style={{ marginBottom: '0.5rem' }}>
        Special material handling protocol — reference table
      </div>
      <div className="checklist-wrap">
        <header className="checklist-head">
          <h5 className="checklist-head__title">Special material handling protocol checklist</h5>
          <span className="checklist-badge">Requires trained supervisor</span>
        </header>

        {/* Desktop: full table */}
        <div className="cl-table-wrap">
          <table className="cl-table">
            <thead>
              <tr>
                <th scope="col">Material</th>
                <th scope="col">Key risks</th>
                <th scope="col">Handling protocol</th>
                <th scope="col">Disposal pathway</th>
              </tr>
            </thead>
            <tbody>
              {protocolChecklist.map((row) => (
                <tr key={row.material}>
                  <th scope="row">{row.material}</th>
                  <td>
                    <div className="cl-table__pills">
                      {row.risks.tags.map((t) => (
                        <span key={t.label} className={`risk-pill risk-pill--${t.tone}`}>{t.label}</span>
                      ))}
                    </div>
                    <p className="cl-table__risk-note">{row.risks.note}</p>
                  </td>
                  <td>{row.handling}</td>
                  <td>{row.disposal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: card-per-row */}
        <div className="cl-cards">
          {protocolChecklist.map((row) => (
            <article key={row.material} className="cl-card">
              <h6 className="cl-card__material">{row.material}</h6>
              <div className="cl-card__row">
                <div className="cl-card__lbl">Key risks</div>
                <div>
                  <div className="cl-table__pills">
                    {row.risks.tags.map((t) => (
                      <span key={t.label} className={`risk-pill risk-pill--${t.tone}`}>{t.label}</span>
                    ))}
                  </div>
                  <p className="cl-table__risk-note">{row.risks.note}</p>
                </div>
              </div>
              <div className="cl-card__row">
                <div className="cl-card__lbl">Handling protocol</div>
                <p>{row.handling}</p>
              </div>
              <div className="cl-card__row">
                <div className="cl-card__lbl">Disposal pathway</div>
                <p>{row.disposal}</p>
              </div>
            </article>
          ))}
        </div>

        <footer className="checklist-foot">
          <span className="checklist-foot__note">Showing 2 of full protocol table</span>
          <a href="#sec-tools" className="checklist-foot__link">
            <Icon name="Download" size={14} />
            Download full table — Tools &amp; Templates
          </a>
        </footer>
      </div>
    </article>
  )
}