// src/components/bp/Facility.jsx
import { useEffect, useState } from 'react'
import { facilityIntro, designPrinciples, siteSelectionCards } from '@/data/facility'
import Icon from '../ui/Icon'
import './Facility.css'

export default function Facility() {
  const [slide, setSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  )
  const total = designPrinciples.length

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const go = (delta) => setSlide((s) => (s + delta + total) % total)
  const goTo = (i) => setSlide(i)

  // Position helpers for the 3D carousel — front, right, back, left
  // We rotate the whole scene by -90° per step
  const sceneRotation = -slide * 90

  return (
    <article className="bp-panel-content">
      <h3 className="bp-panel__title">Facility design and layout</h3>
      <p className="bp-panel__intro">{facilityIntro}</p>

      <h4 className="bp-subheading">Site design principles</h4>

      {!isMobile ? (
        // ── 3D rotating carousel (desktop) ──
        <div className="fac-3d">
          <div className="fac-3d__viewport">
            <div
              className="fac-3d__scene"
              style={{ transform: `translateZ(-280px) rotateY(${sceneRotation}deg)` }}
            >
              {designPrinciples.map((p, i) => (
                <article
                  key={p.num}
                  className={`fac-3d__card ${i === slide ? 'fac-3d__card--active' : ''}`}
                  style={{ transform: `rotateY(${i * 90}deg) translateZ(280px)` }}
                  aria-hidden={i !== slide}
                >
                  <div className="fac-3d__card-icon">
                    <Icon name={p.icon} size={28} />
                  </div>
                  <span className="fac-3d__card-num">{p.num}</span>
                  <h5 className="fac-3d__card-title">{p.title}</h5>
                  <p className="fac-3d__card-body">{p.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="fac-3d__controls">
            <button type="button" className="fac-3d__arrow" onClick={() => go(-1)} aria-label="Previous principle">
              <Icon name="ArrowLeft" size={18} />
            </button>
            <div className="fac-3d__dots" role="tablist" aria-label="Principle">
              {designPrinciples.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === slide}
                  aria-label={`Go to principle ${i + 1}`}
                  className={`fac-3d__dot ${i === slide ? 'fac-3d__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button type="button" className="fac-3d__arrow" onClick={() => go(1)} aria-label="Next principle">
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      ) : (
        // ── Stacked cards (mobile) ──
        <div className="fac-stack">
          {designPrinciples.map((p) => (
            <article key={p.num} className="fac-stack__card">
              <div className="fac-stack__card-icon">
                <Icon name={p.icon} size={24} />
              </div>
              <span className="fac-stack__card-num">{p.num}</span>
              <h5 className="fac-stack__card-title">{p.title}</h5>
              <p className="fac-stack__card-body">{p.body}</p>
            </article>
          ))}
        </div>
      )}

      <div className="bp-section-divider" />
      <h4 className="bp-subheading">Site selection principles</h4>

      <div className="site-grid">
        {siteSelectionCards.map((card) => (
          <article key={card.title} className={`site-card site-card-${card.tone} ${card.fullWidth ? 'full-width' : ''}`}>
            <header className="site-card__head">
              <div className="site-card__icon">
                <Icon name={card.icon} size={18} />
              </div>
              <div>
                <h5 className="site-card__title">{card.title}</h5>
                <span className="site-card__tag">{card.tag}</span>
              </div>
            </header>
            <p className="site-card__body">{card.body}</p>

            {card.badge && (
              <div className="site-card__badge">
                <div className="site-card__badge-num">{card.badge.value}</div>
                <div className="site-card__badge-label">{card.badge.label}</div>
              </div>
            )}

            <ul className="site-card__tips">
              {card.tips.map((t) => (
                <li key={t}>
                  <span className="site-card__tip-dot" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </article>
  )
}