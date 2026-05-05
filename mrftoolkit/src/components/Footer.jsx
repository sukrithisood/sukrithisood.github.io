// src/components/Footer.jsx
import { useState } from 'react'
import Icon from './ui/Icon'
import './Footer.css'

// Brand icons that Lucide doesn't reliably ship — inline SVGs so they always render.
// 24x24 viewBox, currentColor stroke/fill, sized via the .share-btn__svg class.
function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      className="share-btn__svg"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      className="share-btn__svg"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Footer() {
  const [copied, setCopied] = useState(false)

  // Build absolute URL to the toolkit so the share text always carries a working link,
  // even when shared away from the toolkit context.
  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${import.meta.env.BASE_URL}`
      : ''

  // Per-channel messaging — tone tuned to each medium.
  const emailSubject = "Sharing: MRF Practitioner's Toolkit"
  const emailBody = `Hi,

I came across this toolkit and thought you might find it useful - it's a practical, India-specific guide for Material Recovery Facility operators, covering health indicators, operational best practices, a strategic risk matrix, and downloadable templates.

You can explore it here: ${shareUrl}

It's developed in partnership between Hindustan Unilever, Project Circular Bharat, and Xynteo, and is built on conversations with facility owners, ULBs, and waste ecosystem organisations across the country.

Best,`

  const whatsappText = `Sharing the MRF Practitioner's Toolkit, a practical India-specific guide for Material Recovery Facility operators. Has health indicators, best practices, risk matrix, and downloadable templates.

${shareUrl}`

  const linkedinPost = `Excited to share the MRF Practitioner's Toolkit - a field-validated operational guide for Material Recovery Facility operators across India.

Built on conversations with facility owners, urban local bodies, and waste ecosystem organisations, it covers:

→ MRF health indicators & benchmarks
→ Field-validated best practices across governance, operations, and workforce
→ Strategic risk matrix for blind-spot exposures
→ Downloadable templates & guides

Developed in partnership with Hindustan Unilever, Project Circular Bharat, and Xynteo.

Explore the toolkit: ${shareUrl}

#WasteManagement #CircularEconomy #Sustainability #MRF #India`

  // Click handlers
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  // LinkedIn note: the share dialog only pre-fills from Open Graph metadata at the
  // destination URL. To still help the user, copy our long-form post text to clipboard
  // first so they can paste it into the composer with one Cmd+V / Ctrl+V.
  const handleLinkedIn = async (e) => {
    try {
      await navigator.clipboard.writeText(linkedinPost)
    } catch {
      // If clipboard fails, that's fine — share dialog still opens
    }
    // Don't preventDefault — the <a> still navigates to LinkedIn share.
    // The href on the anchor handles the actual navigation in a new tab.
  }

  const emailHref = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`

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

        <div className="site-footer__share-block">
          <div className="site-footer__share-title">Share this toolkit</div>
          <div className="site-footer__share-icons" role="group" aria-label="Share options">
            <button
              type="button"
              className={`share-btn ${copied ? 'share-btn--copied' : ''}`}
              onClick={handleCopy}
              aria-label={copied ? 'Link copied' : 'Copy link to clipboard'}
              title={copied ? 'Link copied' : 'Copy link'}
            >
              <Icon name={copied ? 'Check' : 'Link'} size={18} />
            </button>
            <a
            href={emailHref}
              className="share-btn"
              aria-label="Share via email"
              title="Email"
            >
              <Icon name="Mail" size={18} />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn"
              aria-label="Share on WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon />
            </a>

            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn"
              onClick={handleLinkedIn}
              aria-label="Share on LinkedIn (post text copied to clipboard)"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="site-footer__ver">Version 1.0 · 2025</div>
        </div>
      </div>

      <div className="site-footer__legal">
        <span>© 2025 - All rights reserved.</span>
        <span aria-hidden="true">·</span>
        <span>For internal use and stakeholder reference only.</span>
      </div>
    </footer>
  )
}