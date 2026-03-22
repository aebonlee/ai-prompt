import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useAos() {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => {
      el.classList.remove('aos-animate')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])
}
