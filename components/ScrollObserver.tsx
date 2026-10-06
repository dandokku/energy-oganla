'use client'

import { useEffect } from 'react'

export default function ScrollObserver() {
  useEffect(() => {
    const handleReveal = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const triggerBottom = windowHeight * 0.94

      const revealElements = document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger')

      revealElements.forEach((el) => {
        if (el.classList.contains('revealed')) return
        const rect = el.getBoundingClientRect()
        // If element is within viewport range
        if (rect.top <= triggerBottom && rect.bottom >= -50) {
          el.classList.add('revealed')
        }
      })
    }

    // Run immediately
    handleReveal()

    // Run across immediate ticks to ensure all rendered DOM nodes are detected
    const t1 = setTimeout(handleReveal, 60)
    const t2 = setTimeout(handleReveal, 200)
    const t3 = setTimeout(handleReveal, 600)
    const t4 = setTimeout(handleReveal, 1200)

    // Window scroll, resize, orientation listeners
    window.addEventListener('scroll', handleReveal, { passive: true })
    window.addEventListener('resize', handleReveal, { passive: true })
    window.addEventListener('orientationchange', handleReveal, { passive: true })

    // IntersectionObserver as hardware-accelerated backup
    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== 'undefined') {
      try {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('revealed')
                observer?.unobserve(entry.target)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '60px 0px 60px 0px',
          }
        )

        document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
          observer?.observe(el)
        })
      } catch {
        // Fallback already covered by scroll listeners
      }
    }

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      window.removeEventListener('scroll', handleReveal)
      window.removeEventListener('resize', handleReveal)
      window.removeEventListener('orientationchange', handleReveal)
      observer?.disconnect()
    }
  }, [])

  return null
}
