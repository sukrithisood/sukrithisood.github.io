// src/components/bp/workforce/WfRecognition.jsx
import { recognitionIntro, recognitionCards, careerLadder, tenureMilestones, ambassadorBox } from '@/data/workforce'
import Icon from '../../ui/Icon'

export default function WfRecognition() {
  return (
    <div>
      <p className="train-intro">{recognitionIntro}</p>

      <div className="rec-grid">
        {recognitionCards.map((c) => (
          <article key={c.title} className={`rec-card rec-card--${c.tone}`}>
            <header className="rec-card__head">
              <span className={`rec-card__icon rec-card__icon--${c.tone}`}>
                <Icon name={c.icon} size={18} />
              </span>
              <div>
                <h5 className="rec-card__title">{c.title}</h5>
                <span className={`rec-card__tag rec-card__tag--${c.tone}`}>{c.tag}</span>
              </div>
            </header>
            <p className="rec-card__body">{c.body}</p>
          </article>
        ))}
      </div>

      <h5 className="fs-block-title" style={{ marginTop: '1.25rem' }}>Career ladder — creating visible progression</h5>
      <div className="ladder">
        {careerLadder.map((step, i) => (
          <div key={step.level} className="ladder__step-wrap">
            <div className={`ladder__step ladder__step--${i + 1}`}>
              <div className="ladder__bubble">{step.title}</div>
              <div className="ladder__sub">{step.sub}</div>
              <div className="ladder__desc">{step.desc}</div>
            </div>
            {i < careerLadder.length - 1 && (
              <div className="ladder__arrow" aria-hidden="true">
                <Icon name="ArrowRight" size={20} />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="ladder__note">
        Each level carries a small pay increment and a different coloured vest or ID badge — visible signals of seniority. Workers at L2+ become visible mentors to new joiners.
      </p>

      <h5 className="fs-block-title">Tenure milestones — the 1000-day programme</h5>
      <div className="milestone-strip">
        {tenureMilestones.map((m) => (
          <div key={m.num} className={`ms-card ${m.special ? 'ms-card--special' : ''}`}>
            <div className="ms-card__num">{m.num}</div>
            <div className="ms-card__lbl">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="amb-box">
        <span className="amb-box__icon">
          <Icon name="Globe" size={22} />
        </span>
        <div>
          <div className="amb-box__title">{ambassadorBox.title}</div>
          <p className="amb-box__body">{ambassadorBox.body}</p>
        </div>
      </div>
    </div>
  )
}