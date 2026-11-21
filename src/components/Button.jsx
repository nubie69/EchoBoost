import { ArrowUpRight } from 'lucide-react'

export function Button({
  children,
  variant = 'primary',
  withIcon = false,
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`eb-button eb-button-${variant} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withIcon && <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.25} />}
    </button>
  )
}
