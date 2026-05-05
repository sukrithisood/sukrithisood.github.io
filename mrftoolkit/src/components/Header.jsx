// src/components/Header.jsx
import { useRef } from 'react'
import useElementHeight from '@/hooks/useElementHeight'
import './Header.css'

// Vite serves `public/` at the BASE_URL root. We construct paths through
// import.meta.env.BASE_URL so they work in both dev (/) and prod (/mrftoolkit/).
const baseUrl = import.meta.env.BASE_URL

export default function Header() {
  const headerRef = useRef(null)
  // Measure header height live and write it to --header-h on :root.
  // This drives sticky offsets in Nav.css and scroll-margin in section anchors.
  useElementHeight(headerRef, '--header-h')

  return (
    <header className="site-header" role="banner" ref={headerRef}>
      <div className="site-header__inner">
        {/* Left: two partner logos */}
        <div className="site-header__logos site-header__logos--left">
          <img
            src={`${baseUrl}projectcircular.png`}
            alt="Project Circular Bharat"
            className="site-header__logo site-header__logo--pc"
          />
          <img
            src={`${baseUrl}hul.png`}
            alt="Hindustan Unilever Limited"
            className="site-header__logo site-header__logo--hul"
          />
        </div>

        {/* Center: title */}
        <h1 className="site-header__title">
          MRF Practitioner&rsquo;s Toolkit
        </h1>

        {/* Right: Xynteo logo (desktop) — shown via CSS, hidden on mobile */}
        <div className="site-header__logos site-header__logos--right">
          <img
            src={`${baseUrl}xynteo.png`}
            alt="Xynteo"
            className="site-header__logo site-header__logo--xynteo"
          />
        </div>

        {/* Mobile-only third row: text version of partnership credit.
            Hidden on desktop via CSS. */}
        <p className="site-header__partnership">
          In partnership with <strong>Xynteo</strong>
        </p>
      </div>
    </header>
  )
}