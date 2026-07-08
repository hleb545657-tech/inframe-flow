import { useEffect } from 'react'

export const SmoothScroll = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return null
}
