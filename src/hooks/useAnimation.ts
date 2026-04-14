import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollTrigger = (elementRef: React.RefObject<HTMLElement>, animation?: (el: HTMLElement) => void) => {
  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    if (animation) {
      animation(element)
    } else {
      // Default fade-in on scroll
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [elementRef, animation])
}

export const useParallax = (elementRef: React.RefObject<HTMLElement>, speed: number = 0.5) => {
  useEffect(() => {
    if (!elementRef.current) return

    gsap.to(elementRef.current, {
      y: () => window.innerHeight * speed,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [elementRef, speed])
}

export const useCountUpAnimation = (target: number, duration: number = 2) => {
  const countRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!countRef.current) return

    const obj = { value: 0 }

    gsap.to(obj, {
      value: target,
      duration,
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = Math.ceil(obj.value).toLocaleString()
        }
      },
    })
  }, [target, duration])

  return countRef
}
