// src/components/panels/RiskPanel.jsx
import { useState } from 'react'
import {
  riskIntro, riskLegend, riskMatrix, matrixAxes, riskCards,
} from '@/data/risks'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import './RiskPanel.css'

export default function RiskPanel() {
  const [activeId, setActiveId] = useState('operational')
  const activeRisk = riskCards.find((r) => r.id === activeId)

  return (
    <section id="sec-risk" className="panel panel--risk">
      <Container>
        <SectionHeader
          eyebrow="Risk Matrix"
          title="Risk Matrix"
          subtitle="Indicative guide to strategic and blind-spot risks in operating an MRF."
        />

        <div className="risk-intro-box">
          <Icon name="ShieldAlert" size={18} className="risk-intro-box__icon" />
          <p>{riskIntro}</p>
        </div>

        {/* Heat map */}
        <div className="risk-map">
          <h3 className="risk-map__title">Strategic risk heat map — India MRF operations</h3>

          <div className="risk-legend" aria-label="Exposure level legend">
            {riskLegend.map((l) => (
              <div key={l.id} className="risk-legend__item">
                <span className={`risk-swatch risk-swatch--${l.tone}`} aria-hidden="true" />
                <span>{l.label}</span>
              </div>
            ))}
          </div>

          <div
            className="risk-matrix"
            role="img"
            aria-label="Three by three risk matrix mapping likelihood against impact"
          >
            <div className="risk-matrix__top-labels" aria-hidden="true">
              {matrixAxes.likelihood.map((l) => <span key={l}>{l}</span>)}
            </div>

            <div className="risk-matrix__y-label" aria-hidden="true">Impact</div>
            <div className="risk-matrix__row-labels" aria-hidden="true">
              {matrixAxes.impact.map((l) => <span key={l}>{l}</span>)}
            </div>

            <div className="risk-matrix__grid">
              {riskMatrix.map((cell, i) => (
                <div key={i} className={`risk-cell risk-cell--${cell.tone}`}>
                  {cell.bubbles.map((b, bi) => (
                    <button
                      key={b.id}
                      type="button"
                      className={`risk-bubble risk-bubble--${b.id} ${activeId === b.id ? 'risk-bubble--active' : ''}`}
                      style={cell.bubbles.length === 2 ? { left: bi === 0 ? '32%' : '68%' } : { left: '50%' }}
                      onClick={() => setActiveId(b.id)}
                      aria-label={`${b.label}, view details`}
                    >
                      <span className="risk-bubble__dot">{b.code}</span>
                      <span className="risk-bubble__label">{b.label}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div className="risk-matrix__x-label" aria-hidden="true">Likelihood →</div>
          </div>

          <p className="risk-matrix__hint">
            Tap any risk bubble or card below for detailed signals and mitigations.
          </p>
        </div>

        {/* Cue cards */}
        <div className="risk-cue-grid" role="tablist" aria-label="Risk categories">
          {riskCards.map((r) => {
            const isActive = activeId === r.id
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`risk-cue ${isActive ? 'risk-cue--active' : ''}`}
                onClick={() => setActiveId(r.id)}
              >
                <div className="risk-cue__top">
                  <span className={`risk-code risk-code--${r.tone}`}>{r.code}</span>
                  <span className="risk-cue__title">{r.title}</span>
                </div>
                <p className="risk-cue__note">{r.cueNote}</p>
              </button>
            )
          })}
        </div>

        {/* Detail panel */}
        <article className="risk-detail" key={activeRisk.id} aria-live="polite">
          <header className="risk-detail__head">
            <span className={`risk-code risk-code--${activeRisk.tone} risk-code--lg`}>
              {activeRisk.code}
            </span>
            <h3 className="risk-detail__title">{activeRisk.title}</h3>
          </header>
          <p className="risk-detail__body">{activeRisk.body}</p>

          <div className="risk-detail__grid">
            <div className="risk-detail__block">
              <div className="risk-detail__label">
                <Icon name="AlertCircle" size={14} />
                Risk signals
              </div>
              <ul className="risk-detail__list">
                {activeRisk.signals.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="risk-detail__block">
              <div className="risk-detail__label">
                <Icon name="ShieldCheck" size={14} />
                Mitigation strategies
              </div>
              <ul className="risk-detail__list">
                {activeRisk.mitigations.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}