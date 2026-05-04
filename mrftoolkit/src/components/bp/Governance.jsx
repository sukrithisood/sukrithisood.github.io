// src/components/bp/Governance.jsx
import {
  governanceIntro,
  governanceDimensions,
  governanceModels,
  governanceSpectrum,
  governanceBubbles,
} from '@/data/governance'
import Icon from '../ui/Icon'
import './Governance.css'

export default function Governance() {
  return (
    <article className="bp-panel-content">
      <h3 className="bp-panel__title">Governance and operating models</h3>
      <p className="bp-panel__intro">{governanceIntro}</p>

      <ul className="gov-dim-list">
        {governanceDimensions.map((d) => (
          <li key={d.label}>
            <strong>{d.label}:</strong> {d.body}
          </li>
        ))}
      </ul>

      {/* Quote placeholder — drop a real famous quote here later */}
      {/* <blockquote class="gov-quote"> ... </blockquote> */}
      <div className="gov-quote-placeholder" aria-hidden="true">
        Add quote
      </div>

      {/* ── Governance spectrum ── */}
      <div className="gov-spectrum" aria-label="Operating model continuum from private-led to public-led">
        <h4 className="gov-vis-title">Governance spectrum — operating model continuum</h4>
        <div className="gov-spectrum__axis">
          <span>Private-led</span>
          <span>Public-led</span>
        </div>
        <div className="gov-spectrum__track" />
        <div className="gov-spectrum__nodes">
          {governanceSpectrum.map((node) => (
            <div key={node.id} className="gov-spectrum__node">
              <span
                className="gov-spectrum__dot"
                style={{ background: node.color }}
              />
              <span className="gov-spectrum__label">{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bubble chart (desktop only) ── */}
      <div className="gov-bubble-wrap">
        <h4 className="gov-vis-title">Governance landscape — ownership vs. collection model</h4>
        <p className="gov-vis-sub">
          Bubble size reflects indicative relative prevalence across Indian MRFs today. Axes show
          degree of public/private ownership and collection responsibility.
        </p>

        <div
          className="gov-chart"
          role="img"
          aria-label="Quadrant chart positioning six governance models by ownership and collection responsibility"
        >
          <span className="gov-chart__quad gov-chart__quad--tl">Public ownership<br />Private collection</span>
          <span className="gov-chart__quad gov-chart__quad--tr">Private ownership<br />Private collection</span>
          <span className="gov-chart__quad gov-chart__quad--bl">Public ownership<br />Public collection</span>
          <span className="gov-chart__quad gov-chart__quad--br">Private ownership<br />Public collection</span>

          {/* Quadrant divider lines */}
          <div className="gov-chart__hline" />
          <div className="gov-chart__vline" />

          {governanceBubbles.map((b) => (
            <span
              key={b.id}
              className="gov-bubble"
              style={{
                left: `${b.x}%`,
                bottom: `${b.y}%`,
                width: `${b.size}%`,
                paddingTop: `${b.size}%`,
                background: b.color,
              }}
            >
              <span className="gov-bubble__label">{b.label}</span>
            </span>
          ))}
        </div>

        <div className="gov-chart__axis-labels">
          <span>Public ownership</span>
          <span>Private ownership</span>
        </div>

        {/* Mobile fallback note */}
        <p className="gov-chart__mobile-note">
          The interactive landscape chart is best viewed on a wider screen. The Model contextual
          guidance below covers the same six models in detail.
        </p>
      </div>

      <div className="bp-section-divider" />
      <h4 className="bp-subheading">Model contextual guidance</h4>

      <div className="gov-grid">
        {governanceModels.map((m) => (
          <article key={m.id} className={`gov-card gov-card--${m.id}`}>
            <header className="gov-card__head">
              <span className="gov-card__badge">{m.badge}</span>
              <span className="gov-card__ctx">{m.context}</span>
            </header>
            <h5 className="gov-card__title">{m.title}</h5>
            <p className="gov-card__nuance">{m.nuance}</p>

            <div className="gov-card__section-title">Best-fit context</div>
            <ul className="gov-card__list">
              {m.bestFit.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <div className="gov-card__divider" />

            <div className="gov-card__cols">
              <div>
                <div className="gov-card__col-title gov-card__col-title--pro">Pros</div>
                {m.pros.map((p) => (
                  <div key={p} className="gov-card__item">
                    <Icon name="Check" size={14} className="gov-card__dot gov-card__dot--pro" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="gov-card__col-title gov-card__col-title--con">Cons</div>
                {m.cons.map((c) => (
                  <div key={c} className="gov-card__item">
                    <Icon name="Minus" size={14} className="gov-card__dot gov-card__dot--con" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {m.keyConsideration && (
              <div className="gov-card__key">
                <strong>Key consideration:</strong> {m.keyConsideration}
              </div>
            )}
          </article>
        ))}
      </div>
    </article>
  )
}