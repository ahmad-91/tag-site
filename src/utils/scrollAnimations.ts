'use client'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  staggerDelay?: number
  resetOnExit?: boolean
}

export function initScrollAnimations(
  sectionRef: React.RefObject<HTMLElement>, 
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -80px 0px',
    staggerDelay = 150,
    resetOnExit = true,
  } = options

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const elements = entry.target.querySelectorAll(
          '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-fade, .scroll-reveal-blur'
        )

        if (entry.isIntersecting) {
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('revealed')
            }, index * staggerDelay)
          })
        } else if (resetOnExit) {
          elements.forEach((el) => {
            el.classList.remove('revealed')
          })
        }
      })
    },
    { threshold, rootMargin }
  )

  if (sectionRef.current) {
    observer.observe(sectionRef.current)
  }

  return () => observer.disconnect()
}

