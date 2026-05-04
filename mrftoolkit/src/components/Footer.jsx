// src/components/Footer.jsx
import { useState } from 'react'
import Icon from './ui/Icon'
import './Footer.css'

export default function Footer() {
  const [shareState, setShareState] = useState('idle') // 'idle' | 'copied'

  const handleShare = async () => {
    const url = window.location.href
    const title = "MRF Practitioner's Toolkit"

    // Use the Web Share API on mobile/supported browsers; otherwise copy to clipboard
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // User cancelled — silent
      }
      return
    }

    try {
      await navigator.clipboard.writeText(url)
      setShareState('copied')
      setTimeout(() => setShareState('idle'), 2000)
    } catch {
      setShareState('idle')
    }
  }

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <div className="site-footer__brand">MRF Practitioner&rsquo;s Toolkit</div>
          <p className="site-footer__tag">
            Field-validated guidance for Material Recovery Facility operators across India.
          </p>
        </div>

        <div className="site-footer__credit">
          A knowledge product developed with support from
          <strong>Hindustan Unilever Limited</strong>
          <span className="site-footer__credit-sub">
            In partnership for a sustainable circular economy
          </span>
        </div>

        <div className="site-footer__right">
          <div className="site-footer__ver">Version 1.0 · 2025</div>
          <button
            type="button"
            className="site-footer__share"
            onClick={handleShare}
            aria-live="polite"
          >
            <Icon name={shareState === 'copied' ? 'Check' : 'Share2'} size={14} />
            {shareState === 'copied' ? 'Link copied' : 'Share this toolkit'}
          </button>
        </div>
      </div>

      <div className="site-footer__legal">
        <span>© 2025 — All rights reserved.</span>
        <span aria-hidden="true">·</span>
        <span>For internal use and stakeholder reference only.</span>
      </div>
    </footer>
  )
}