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
  const activeId = useScrollSpy(sectionIds)

  // Intent override: when the user clicks a nav item, immediately show
  // that item as active rather than waiting for the smooth-scroll to
  // finish and the scroll-spy to catch up. Cleared once the scroll
  // settles (we detect this by waiting for one frame after the scrollend
  // event, falling back to a timeout for browsers without scrollend).
  const [intentId, setIntentId] = useState(null)

  // Close mobile menu when viewport widens past mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e) => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  // Lock body scroll while mobile menu is open
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

    // Show the clicked item as active immediately for snappy UX.
    setIntentId(id)

    const target = document.getElementById(id)
    if (!target) return

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Clear the intent once the scroll has completed. We prefer the modern
    // 'scrollend' event (Chrome 114+, Safari 18+, Firefox 109+); fall back
    // to a timeout for older browsers so we never end up stuck on intent.
    const cleanup = () => setIntentId(null)
    let timeoutId

    const onScrollEnd = () => {
      cleanup()
      window.removeEventListener('scrollend', onScrollEnd)
      clearTimeout(timeoutId)
    }

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', onScrollEnd, { once: true })
      // Safety net in case scrollend doesn't fire (e.g. user interrupts
      // the scroll by pressing another nav item).
      timeoutId = setTimeout(onScrollEnd, 1500)
    } else {
      // Older browsers: smooth scroll typically completes within ~600ms.
      // 1000ms is generous enough to cover slower devices.
      timeoutId = setTimeout(cleanup, 1000)
    }
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
            // Intent (just-clicked) takes precedence; once cleared, fall back to scroll-spy.
            const isActive = (intentId ?? activeId) === sectionId
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