'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
        onClick={() => setMenuOpen(true)}
        aria-expanded={menuOpen}
        aria-label="Open menu"
      >
        <Menu />
      </button>

      {/* Hero Wordmark (Centered on Desktop and Mobile) */}
      <a
        className="hero-wordmark"
        href="#top"
        onClick={close}
        aria-label="Energy Oganla home"
      >
        ENERGY<br />OGANLA
      </a>

      {/* Simple Clean Red Mobile Menu Drawer */}
      <div
        className={`simple-mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Close Button */}
        <button
          className="simple-menu-close"
          onClick={close}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {/* Minimal Navigation Links */}
        <nav className="simple-menu-nav" aria-label="Mobile navigation">
          <a href="#about" onClick={close} className="simple-nav-link">
            ABOUT
          </a>
          <a href="#work" onClick={close} className="simple-nav-link">
            WORK
          </a>
          <a href="#faq" onClick={close} className="simple-nav-link">
            FAQ
          </a>
          <a href="#contact" onClick={close} className="simple-nav-link">
            CONTACT
          </a>
        </nav>

        {/* Minimal Footer */}
        <div className="simple-menu-footer">
          <a
            href="https://www.instagram.com/energyoganla?stkn=bTExdG0wY2djZWxz&utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>
          <span>•</span>
          <a
            href="https://x.com/energyoganla?s=11"
            target="_blank"
            rel="noreferrer noopener"
          >
            X
          </a>
          <span>•</span>
          <a href="mailto:WorkwithOganla@gmail.com">
            Email
          </a>
        </div>
      </div>
    </header>
  )
}
