// src/components/ui/Icon.jsx
import * as LucideIcons from 'lucide-react'

/**
 * Centralized icon component.
 *
 * Usage:
 *   <Icon name="Download" size={16} />
 *   <Icon name="ArrowRight" size={20} className="some-class" />
 *
 * `name` is the Lucide icon name in PascalCase (see https://lucide.dev/icons).
 * Decorative icons are aria-hidden by default. For meaningful icons,
 * pass `label` to make them accessible: <Icon name="X" label="Close menu" />
 */
export default function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  className = '',
  label,
  ...rest
}) {
  const LucideIcon = LucideIcons[name]

  if (!LucideIcon) {
    // Don't crash the whole app; just warn in dev so we catch typos.
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(`<Icon name="${name}" /> — icon not found in lucide-react.`)
    }
    return null
  }

  const a11y = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': 'true', focusable: 'false' }

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...a11y}
      {...rest}
    />
  )
}