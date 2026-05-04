// src/hooks/useScrollSpy.js
import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently most visible in the viewport.
 *
 * Strategy: track all observed entries' last `isIntersecting` state in a
 * Map. After each observer callback, pick the topmost section whose
 * intersection rect is currently within the trigger zone. This avoids
 * flicker during smooth-scroll, where multiple sections briefly overlap.
 *
 * @param {string[]} ids — element ids to observe (without leading #)
 * @param {object} opts
 * @param {string} opts.rootMargin
 * @returns {string|null}
 */
export default function useScrollSpy(ids, { rootMargin = '-120px 0px -70% 0px' } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    if (!ids.length) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    // Track each element's latest intersection state so we can
    // pick the right active id from the *full* set, not just one entry.
    const intersecting = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        // Update map with latest entries
        for (const entry of entries) {
          intersecting.set(entry.target.id, entry.isIntersecting)
        }

        // Of all currently-intersecting sections, pick the one whose
        // element is highest up the page (smallest top offset). That's
        // the section the user is "in" right now.
        const active = elements
          .filter((el) => intersecting.get(el.id))
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0]

        if (active) {
          setActiveId(active.id)
        }
      },
      { rootMargin, threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}