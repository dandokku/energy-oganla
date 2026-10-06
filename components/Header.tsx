'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="site-header hero-header">
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <a
        className="hero-wordmark"
        href="#top"
        onClick={close}
        aria-label="Energy Oganla home"
      >
        ENERGY<br />OGANLA
      </a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a href="#about" onClick={close}>ABOUT</a>
        <a href="#work" onClick={close}>WORK</a>
        <a href="#faq" onClick={close}>FAQ</a>
        <a href="#contact" onClick={close}>CONTACT</a>
      </nav>
    </header>
  )
}
