// src/hooks/useScrollSpy.js
import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently most visible in the viewport.
 *
 * Strategy: on every scroll, find the section whose top edge is closest to
 * (but not above) a "trigger line" sitting just below the sticky header+nav.
 * In other words: the section whose top has most recently passed under the nav.
 *
 * This is more reliable than IntersectionObserver-based "topmost intersecting"
 * because it produces a single deterministic answer at every scroll position,
 * with no race conditions during smooth-scroll animations.
 *
 * @param {string[]} ids — element ids to observe (without leading #)
 * @returns {string|null}
 */
export default function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    if (!ids.length) return

    const computeActive = () => {
      // Read live header+nav heights for the trigger line.
      // Add 4px buffer so the active state changes the moment a section's
      // top crosses just below the nav, not on the exact pixel boundary.
      const styles = getComputedStyle(document.documentElement)
      const headerH = parseFloat(styles.getPropertyValue('--header-h')) || 64
      const navH = parseFloat(styles.getPropertyValue('--nav-h')) || 48
      const triggerLine = headerH + navH + 20

      // Get all section elements with their top positions relative to viewport.
      const sections = ids
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return null
          return { id, top: el.getBoundingClientRect().top }
        })
        .filter(Boolean)

      if (!sections.length) return

      // Find the section whose top has scrolled past the trigger line.
      // Sections with `top <= triggerLine` have scrolled under the nav.
      // Of those, the one with the LARGEST top (closest to trigger) is "active".
      const passed = sections.filter((s) => s.top <= triggerLine)
      if (passed.length === 0) {
        // Nothing has scrolled past yet — first section is active.
        setActiveId(sections[0].id)
        return
      }

      passed.sort((a, b) => b.top - a.top)
      setActiveId(passed[0].id)
    }

    // Run once immediately so initial state is correct.
    computeActive()

    // Throttle scroll events with requestAnimationFrame.
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          computeActive()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', computeActive)
    window.addEventListener('orientationchange', computeActive)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', computeActive)
      window.removeEventListener('orientationchange', computeActive)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return activeId
}