// src/components/ui/Container.jsx
/**
 * Standard width-constrained wrapper.
 * Matches the .container CSS class but as a component for cleaner JSX.
 */
export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`container ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}