'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        close()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className="site-header hero-header">
      {/* Mobile-only Menu Trigger Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <Menu />
      </button>

      {/* Hero Wordmark (Centered) */}
      <a
        className="hero-wordmark"
        href="#top"
        onClick={close}
        aria-label="Energy Oganla home"
      >
        ENERGY<br />OGANLA
      </a>

      {/* Backdrop overlay for mobile drawer */}
      <div
        className={`mobile-nav-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={close}
        aria-hidden={!menuOpen}
      />

      {/* Mobile slide-in drawer */}
      <nav
        className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {/* Drawer Header */}
        <div className="mobile-nav-header">
          <div className="mobile-nav-brand-badge">
            <span className="brand-badge-dot" />
            <span className="brand-badge-text">ENERGY OGANLA</span>
          </div>
          <button
            className="mobile-nav-close-button"
            onClick={close}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="mobile-nav-list">
          <a href="#about" onClick={close} className="mobile-nav-item">
            <span className="mobile-nav-num">01</span>
            <span className="mobile-nav-label">ABOUT</span>
            <ArrowUpRight className="mobile-nav-icon" size={22} />
          </a>
          <a href="#work" onClick={close} className="mobile-nav-item">
            <span className="mobile-nav-num">02</span>
            <span className="mobile-nav-label">WORK</span>
            <ArrowUpRight className="mobile-nav-icon" size={22} />
          </a>
          <a href="#faq" onClick={close} className="mobile-nav-item">
            <span className="mobile-nav-num">03</span>
            <span className="mobile-nav-label">FAQ</span>
            <ArrowUpRight className="mobile-nav-icon" size={22} />
          </a>
          <a href="#contact" onClick={close} className="mobile-nav-item">
            <span className="mobile-nav-num">04</span>
            <span className="mobile-nav-label">CONTACT</span>
            <ArrowUpRight className="mobile-nav-icon" size={22} />
          </a>
        </div>

        {/* Drawer Footer */}
        <div className="mobile-nav-footer">
          <a
            href="#contact"
            onClick={close}
            className="mobile-nav-cta"
          >
            WORK WITH ME
          </a>

          <div className="mobile-nav-social-row">
            <a
              href="https://www.instagram.com/energyoganla?stkn=bTExdG0wY2djZWxz&utm_source=qr"
              target="_blank"
              rel="noreferrer noopener"
              className="mobile-nav-social-link"
            >
              Instagram
            </a>
            <span className="social-divider">•</span>
            <a
              href="https://x.com/energyoganla?s=11"
              target="_blank"
              rel="noreferrer noopener"
              className="mobile-nav-social-link"
            >
              X (Twitter)
            </a>
            <span className="social-divider">•</span>
            <a
              href="mailto:WorkwithOganla@gmail.com"
              className="mobile-nav-social-link"
            >
              Email
            </a>
          </div>

          <div className="mobile-nav-subtext">
            Creative Strategy & Operations
          </div>
        </div>
      </nav>
    </header>
  )
}
