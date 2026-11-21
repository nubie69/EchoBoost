export function Heading({ as: Component = 'h2', children, className = '' }) {
  return (
    <Component className={`eb-heading ${className}`}>
      {children}
    </Component>
  )
}
