// src/components/ui/SectionHeader.jsx
import './SectionHeader.css'

/**
 * Standard panel header: small uppercase eyebrow, big serif title, subtitle.
 * Used across Health, Best Practices, Risk, Tools sections.
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  )
}