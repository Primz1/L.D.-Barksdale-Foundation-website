import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
}

/**
 * SEO Meta Tags Component
 * Updates document head with proper meta tags for SEO and social sharing
 * Use in each page's useEffect or as wrapper
 */
export const useSEO = ({ title, description, image, url, type = 'website' }: SEOProps) => {
  const fullTitle = `${title} | L.D. Barksdale Sickle Cell Foundation`
  
  // Update document title
  if (typeof document !== 'undefined') {
    document.title = fullTitle
  }

  return {
    title: fullTitle,
    description,
    image,
    url,
    type,
  }
}

/**
 * Lazy load images with intersection observer
 */
export const useLazyLoadImage = (imageRef: React.RefObject<HTMLImageElement>) => {
  useEffect(() => {
    if (!imageRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          observer.unobserve(img)
        }
      },
      { rootMargin: '50px' }
    )

    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [imageRef])
}

/**
 * Formatted phone number
 */
export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
