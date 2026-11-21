import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.05, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const handleNavigation = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
  }

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-white/[0.07] bg-eb-navy-950/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-10">
        <a
          href="#home"
          onClick={() => handleNavigation('home')}
          aria-label="EchoBoost home"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavigation(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeSection === link.id
                  ? 'bg-eb-green-400/10 text-eb-green-400'
                  : 'text-eb-muted hover:text-eb-text'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute inset-x-4 -bottom-1 h-px bg-eb-green-400 shadow-[0_0_10px_rgba(101,255,154,0.8)]" />
              )}
            </a>
          ))}

          <a
            href="#get-started"
            onClick={() => handleNavigation('get-started')}
            className="ml-3 inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#65ff9a,#39ec7a,#10b981)] px-5 text-sm font-bold text-eb-black shadow-eb-glow transition-transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-eb-green-400/20 bg-eb-navy-900 text-eb-text lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.07] bg-eb-navy-950/95 px-6 pb-6 pt-3 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavigation(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-eb-green-400/10 text-eb-green-400'
                    : 'text-eb-muted hover:bg-white/[0.04] hover:text-eb-text'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => handleNavigation('get-started')}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#65ff9a,#39ec7a,#10b981)] px-5 text-sm font-bold text-eb-black shadow-eb-glow"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
