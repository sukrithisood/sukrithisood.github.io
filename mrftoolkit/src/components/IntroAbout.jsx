// src/components/IntroAbout.jsx
import { introContent } from '@/data/intro'
import Container from './ui/Container'
import Icon from './ui/Icon'
import './IntroAbout.css'

export default function IntroAbout() {
  return (
    <div className="intro-about">
      <Container>
        <div className="intro-about__head">
          <span className="intro-about__eyebrow">{introContent.eyebrow}</span>
          <h2 className="intro-about__title">{introContent.title}</h2>
          <p className="intro-about__subtitle">{introContent.subtitle}</p>
        </div>

        <div className="intro-about__grid">
          {introContent.cards.map((card) => (
            <article
              key={card.title}
              className={`intro-card intro-card--${card.tone}`}
            >
              <div className="intro-card__icon">
                <Icon name={card.icon} size={20} />
              </div>
              <h3 className="intro-card__title">{card.title}</h3>

              {card.body && (
                <ul className="intro-card__list">
                  {card.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {card.steps && (
                <ol className="intro-card__steps">
                  {card.steps.map((step, i) => (
                    <li key={step}>
                      <span className="intro-card__step-num" aria-hidden="true">
                        {i + 1}
                      </span>
                      <span className="intro-card__step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              )}
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}