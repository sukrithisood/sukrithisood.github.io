// src/hooks/useElementHeight.js
import { useEffect } from 'react'

/**
 * Observes an element's height and writes it to a CSS custom property
 * on :root. This lets CSS reference live, accurate layout values
 * (e.g., for sticky offsets and scroll-margin) without hardcoding.
 *
 * @param {React.RefObject} ref — ref pointing to the element to measure
 * @param {string} cssVarName — name of the CSS variable (with leading --)
 */
export default function useElementHeight(ref, cssVarName) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const setVar = () => {
      const h = el.getBoundingClientRect().height
      document.documentElement.style.setProperty(cssVarName, `${h}px`)
    }

    setVar()

    const ro = new ResizeObserver(setVar)
    ro.observe(el)
    window.addEventListener('orientationchange', setVar)

    return () => {
      ro.disconnect()
      window.removeEventListener('orientationchange', setVar)
    }
  }, [ref, cssVarName])
}