// src/components/Header.jsx
import { useRef } from 'react'
import useElementHeight from '@/hooks/useElementHeight'
import './Header.css'

export default function Header() {
  const ref = useRef(null)
  useElementHeight(ref, '--header-h')

  return (
    <header ref={ref} className="site-header" role="banner">
      <div className="site-header__inner">
        <span className="site-header__partner" aria-label="Organisation tag">
          [Organisation]
        </span>
        <span className="site-header__title">
          MRF Practitioner&rsquo;s Toolkit
        </span>
        <span className="site-header__hul">
          In partnership with <strong>HUL</strong>
        </span>
      </div>
    </header>
  )
}