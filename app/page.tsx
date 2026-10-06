'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const gallery = [
  { src: '/assets/playground-portrait-1.png', alt: 'Candid conversation in a bright red room', className: 'gallery-card card-one' },
  { src: '/assets/playground-gathering-2.png', alt: 'Creative team gathered around a table', className: 'gallery-card card-two' },
  { src: '/assets/playground-workspace-3.png', alt: 'Colorful creative workspace', className: 'gallery-card card-three' },
  { src: '/assets/playground-event-4.png', alt: 'Speaker sharing an idea at a lively event', className: 'gallery-card card-four' },
]

const projects = [
  { number: '001', title: 'The first room.', text: 'Where a simple idea became a room full of honest conversations.', image: '/assets/playground-gathering-2.png' },
  { number: '002', title: 'Making space.', text: 'A soft place for curious people to arrive, connect and think out loud.', image: '/assets/playground-portrait-1.png' },
  { number: '003', title: 'The next chapter.', text: 'Small moments, big questions and plenty of room to play.', image: '/assets/playground-event-4.png' },
]

const answers = [
  ['What do you actually do?', 'I bring order to ambitious work. That can mean running a project, managing the details around a founder, shaping content or making sure the plan survives contact with reality.'],
  ['How do you work?', 'Calmly, visibly and with a bias toward action. I turn vague requests into next steps, keep people aligned and flag the thing that might become a problem before it does.'],
  ['What kind of work are you open to?', 'Executive support, project management, operations and content or marketing work for thoughtful teams doing meaningful things.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <main id="top">
      <header className="site-header hero-header">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        <a className="hero-wordmark" href="#top" onClick={close} aria-label="Energy Oganla home">ENERGY<br />OGANLA</a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          <a href="#about" onClick={close}>ABOUT</a><a href="#work" onClick={close}>WORK</a><a href="#faq" onClick={close}>FAQ</a><a href="#contact" onClick={close}>CONTACT</a>
        </nav>
      </header>

      <section className="hero-playground">
        <div className="hero-gallery" aria-hidden="true">{gallery.map((image) => <img key={image.src} className={image.className} src={image.src} alt="" />)}</div>
        <div className="hero-copy-playground"><h1>Jackie of all trades <span>&amp;</span><br />mastering them all</h1><p>Creative | Executive Assistant | Media &amp;<br />Project Manager</p><div className="hero-actions"><a className="hero-button hero-button-solid" href="#work">Show Working!</a><a className="hero-button hero-button-glass" href="#contact">Work with me?</a></div></div>
      </section>

      <section className="intro section" id="about"><div className="section-label">01 / A little context</div><div className="intro-content"><h2>Growing up made us too careful.</h2><div><p>Work can make us polished, guarded and very good at saying nothing. I like making a different kind of room.</p><p>One where thoughtful ideas can be messy at first, where plans can change shape and where the person behind the work gets to stay human.</p><a className="text-link" href="#contact">Let&apos;s work together <ArrowUpRight data-icon="inline-end" /></a></div></div></section>

      <section className="work section" id="work"><div className="section-label">02 / Selected work</div><div className="work-heading"><h2>The space. The people. The moving parts.</h2><p>Every project is its own room, with its own rhythm, questions and feeling.</p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.number}><div className="project-image"><img src={project.image} alt={project.title} /><span>{project.number}</span></div><div className="project-meta"><h3>{project.title}</h3><p>{project.text}</p><a className="text-link" href="#contact">Read the story <ArrowUpRight data-icon="inline-end" /></a></div></article>)}</div></section>

      <section className="statement"><p>Good work has a lot of invisible parts. <em>I make room for all of them.</em></p></section>

      <section className="faq section" id="faq"><div className="section-label">03 / Frequently asked</div><div className="faq-layout"><h2>Some useful answers.</h2><div>{answers.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="contact" id="contact"><div className="section-label">04 / Let&apos;s talk</div><h2>Have a lot going on?</h2><p>Tell me about it. I&apos;d love to hear what you&apos;re building and where I can help.</p><a className="button dark" href="mailto:hello@alison.work">Start a conversation <ArrowUpRight data-icon="inline-end" /></a></section>
      <footer><span>ENERGY<span>.</span></span><div><a href="mailto:hello@energyoganla.com">Email</a><a href="#top">Back to top ↑</a></div><small>© 2026 Energy Oganla. Built with care.</small></footer>
    </main>
  )
}
