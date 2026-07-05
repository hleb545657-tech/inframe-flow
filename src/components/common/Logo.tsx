import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const logoRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (logoRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.fromTo(
        logoRef.current.querySelectorAll('path'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
      )
    }
  }, [])

  return (
    <svg
      ref={logoRef}
      viewBox="0 0 460 100"
      className={`w-auto h-10 ${className}`}
    >
      {/* Icon part */}
      <path
        d="M70 30H30c-5.5 0-10 4.5-10 10v30c0 5.5 4.5 10 10 10h40c5.5 0 10-4.5 10-10V40c0-5.5-4.5-10-10-10z"
        fill="none"
        stroke="#C1E8FF"
        strokeWidth="4"
      />
      <circle
        cx="40"
        cy="30"
        r="10"
        fill="none"
        stroke="#C1E8FF"
        strokeWidth="4"
      />
      <path d="M80 50l20 15V35L80 50z" fill="#C1E8FF" />

      {/* Text part: InFrame */}
      <path
        d="M130 70V30h6v30h16v10h-22zm30 0V30h6v30h16v10h-22zm20 0V30h6v40h-6zm16 0L216 30h6l16 40h-6l-4-10h-16l-4 10h-6zm8-16h12l-6-16-6 16zm12 16L270 30h6l12 40h-6l-4-10h-16l-4 10h-6zm12 0V30h6v40h-6zm12 0V30h6v40h-6z"
        fill="#F8FAFC"
      />

      {/* Text part: FLOW (accent) */}
      <path
        d="M360 70V30h24v6h-18v12h14v6h-14v10h18v6h-24zm28 0V30h6v40h-6zm10 0V30h24v6h-18v12h14v6h-14v10h18v6h-24zm32 0l-14-16v16h-6V30h6v24l14-16h6l-14 16 14 24h-6z"
        fill="#C1E8FF"
      />
    </svg>
  )
}
