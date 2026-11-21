export function Card({ children, className = '', as: Component = 'article' }) {
  return (
    <Component className={`eb-card ${className}`}>
      {children}
    </Component>
  )
}
