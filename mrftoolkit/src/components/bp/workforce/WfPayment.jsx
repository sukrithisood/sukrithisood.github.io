// src/components/bp/workforce/WfPayment.jsx
import { paymentIntro, paymentModels, paymentBestPractice, formalisationFriction } from '@/data/workforce'
import Icon from '../../ui/Icon'

export default function WfPayment() {
  return (
    <div>
      <p className="train-intro">{paymentIntro}</p>

      <div className="pay-grid">
        {paymentModels.map((m) => (
          <article key={m.id} className={`pay-card pay-card--${m.tone}`}>
            <span className={`pay-card__badge pay-card__badge--${m.tone}`}>{m.badge}</span>
            <h5 className="pay-card__title">{m.title}</h5>
            <p className="pay-card__desc">{m.desc}</p>

            <div className="pay-card__divider" />

            <div className="pay-card__col-title pay-card__col-title--pro">Strengths</div>
            {m.pros.map((p) => (
              <div key={p} className="pay-card__item">
                <Icon name="Check" size={14} className="pay-card__dot pay-card__dot--pro" />
                <span>{p}</span>
              </div>
            ))}

            <div className="pay-card__col-title pay-card__col-title--con">Limitations</div>
            {m.cons.map((c) => (
              <div key={c} className="pay-card__item">
                <Icon name="Minus" size={14} className="pay-card__dot pay-card__dot--con" />
                <span>{c}</span>
              </div>
            ))}
          </article>
        ))}
      </div>

      <div className="best-box">
        <Icon name="Star" size={20} className="best-box__icon" />
        <div>
          <div className="best-box__title">Best practice</div>
          <p className="best-box__body">{paymentBestPractice}</p>
        </div>
      </div>

      <div className="chal-box">
        <div className="chal-box__title">
          <Icon name="AlertTriangle" size={16} />
          {formalisationFriction.title}
        </div>
        <p className="chal-box__body">{formalisationFriction.body}</p>

        <ol className="chal-box__tips">
          {formalisationFriction.tips.map((t, i) => (
            <li key={t}>
              <span className="chal-box__num">{i + 1}</span>
              <span>{t}</span>
            </li>
          ))}
        </ol>

        <div className="chal-box__coll-note">
          <strong>For collectors:</strong> {formalisationFriction.collectorNote}
        </div>
      </div>
    </div>
  )
}