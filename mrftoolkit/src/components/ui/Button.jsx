// src/components/ui/Button.jsx
import Icon from './Icon'
import './Button.css'

/**
 * Button with three variants and optional leading/trailing icon.
 *
 * variant: 'primary' | 'outline' | 'ghost' | 'accent'
 * size:    'sm' | 'md' | 'lg'
 * icon:    Lucide icon name (PascalCase) — appears before the label
 * iconRight: Lucide icon name — appears after the label
 *
 * Examples:
 *   <Button onClick={...}>Continue</Button>
 *   <Button variant="outline" icon="Download">Download PDF</Button>
 *   <Button as="a" href="..." iconRight="ArrowRight">Learn more</Button>
 */
export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  iconSize,
  className = '',
  children,
  type,
  ...rest
}) {
  // Auto-set type for <button> to avoid accidental form submits
  const buttonType = Tag === 'button' && !type ? 'button' : type
  const computedIconSize = iconSize ?? (size === 'sm' ? 14 : size === 'lg' ? 18 : 16)

  return (
    <Tag
      type={buttonType}
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      {...rest}
    >
      {icon && <Icon name={icon} size={computedIconSize} />}
      <span className="btn__label">{children}</span>
      {iconRight && <Icon name={iconRight} size={computedIconSize} />}
    </Tag>
  )
}