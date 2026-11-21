export function Card({ children, className = '', as: Component = 'article', ...props }) {
  return (
    <Component className={`eb-card ${className}`} {...props}>
      {children}
    </Component>
  )
}
