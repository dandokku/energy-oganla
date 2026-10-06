'use client'

import { useEffect } from 'react'

export default function ScrollObserver() {
  useEffect(() => {
    // Select all scroll reveal targets
    const elements = document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    elements.forEach((el) => {
      // Check if already in viewport
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight - 30 && rect.bottom > 0
      if (inView) {
        el.classList.add('revealed')
      } else {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
