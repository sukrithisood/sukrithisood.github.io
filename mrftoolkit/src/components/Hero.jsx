// src/components/Hero.jsx
import { hero } from '@/data/hero'
import Button from './ui/Button'
import IntroAbout from './IntroAbout'
import './Hero.css'

export default function Hero() {
  const handlePrimary = (e) => {
    e.preventDefault()
    const target = document.getElementById(hero.primaryCta.target)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="sec-intro" aria-labelledby="hero-title">
      <div className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow">{hero.eyebrow}</span>
            <h1 id="hero-title" className="hero__title">{hero.title}</h1>
            <p className="hero__tagline">{hero.tagline}</p>
            <p className="hero__meta">{hero.meta}</p>
            <div className="hero__ctas">
              <Button
                as="a"
                href={`#${hero.primaryCta.target}`}
                onClick={handlePrimary}
                variant="accent"
                size="lg"
                iconRight="ArrowRight"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                as="a"
                href={hero.secondaryCta.href}
                variant="outline"
                size="lg"
                icon="Download"
                className="btn--on-dark"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="hero__media" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}${hero.image.src}`}
              alt=""
              loading="eager"
              fetchpriority="high"
              width="1200"
              height="900"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div className="hero__media-overlay" />
          </div>
        </div>
      </div>

      <IntroAbout />
    </section>
  )
}