// src/components/bp/feedstock/PartEngagement.jsx
import { rwaStructure, tactics, eyesOnGround } from '@/data/feedstock'
import Icon from '../../ui/Icon'

export default function PartEngagement() {
  return (
    <div>
      <div className="fs-sec-label">Upstream Segregation and Engagement</div>
      <p className="fs-intro-strip">
        Improving feedstock quality begins upstream. Sustained engagement with waste generators —
        combining awareness, accountability, and enabling systems — generates meaningful results.
        The most common failure: running awareness campaigns before a reliable collection system
        exists. Build the system first, then the campaign.
      </p>

      <div className="rwa-box">
        <div className="rwa-box__title">
          <Icon name="Users" size={16} />
          RWA (Resident Welfare Association) participation structure
        </div>
        <div className="rwa-box__row">
          {rwaStructure.map((r) => (
            <div key={r.period} className="rwa-cell">
              <span className="rwa-cell__badge">{r.period}</span>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tactic-grid">
        {tactics.map((t) => (
          <article key={t.title} className={`tac tac--${t.tone}`}>
            <div className="tac__icon"><Icon name={t.icon} size={16} /></div>
            <div className="tac__title">{t.title}</div>
            <p className="tac__body">{t.body}</p>
          </article>
        ))}
      </div>

      <div className="eyes-box">
        <div className="eyes-box__title">
          <Icon name="Eye" size={16} />
          Eyes-on-ground network — last-mile collection oversight
        </div>
        <div className="eyes-grid">
          {eyesOnGround.map((e) => (
            <div key={e.label} className="eye-cell">
              <div className="eye-cell__lbl">{e.label}</div>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}