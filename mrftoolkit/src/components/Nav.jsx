// src/components/Nav.jsx
import { useEffect, useRef, useState } from 'react'
import { navItems } from '@/data/nav'
import useScrollSpy from '@/hooks/useScrollSpy'
import useElementHeight from '@/hooks/useElementHeight'
import Icon from './ui/Icon'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  useElementHeight(navRef, '--nav-h')

  const sectionIds = navItems.map((n) => `sec-${n.id}`)
  // Tighter rootMargin: section becomes active as soon as its top
  // crosses just below the sticky nav (~120px from top), and stays
  // active until it fully exits the bottom.
  const activeId = useScrollSpy(sectionIds, {
    rootMargin: '-120px 0px -70% 0px',
  })

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e) => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  // Lock body scroll when mobile menu is open (prevents background scroll)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav ref={navRef} className="site-nav" aria-label="Toolkit sections">
      <div className="site-nav__inner">
        <span className="site-nav__brand">Toolkit</span>
        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav-list"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'X' : 'Menu'} size={22} label={open ? 'Close menu' : 'Open menu'} />
        </button>
        <ul
          id="primary-nav-list"
          className={`site-nav__list ${open ? 'site-nav__list--open' : ''}`}
        >
          {navItems.map(({ id, label }) => {
            const sectionId = `sec-${id}`
            const isActive = activeId === sectionId
            return (
              <li key={id}>
                <a
                  href={`#${sectionId}`}
                  className={`site-nav__item ${isActive ? 'site-nav__item--active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={(e) => handleClick(e, sectionId)}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}