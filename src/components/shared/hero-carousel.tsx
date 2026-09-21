import { useEffect, useState, useCallback } from 'react'

const images = [
  '/hero-main.webp',
  '/programs-acorn.webp',
  '/programs-willow.webp',
  '/programs-fern.webp',
  '/programs-cedar.webp',
  '/programs-oak.webp',
]

const SLIDE_DURATION = 6000
const FADE_DURATION = 1500

const kenBurnsVariants = [
  { from: 'scale(1) translate(0%, 0%)', to: 'scale(1.15) translate(-2%, -1%)' },
  { from: 'scale(1.15) translate(-2%, -1%)', to: 'scale(1) translate(1%, 1%)' },
  { from: 'scale(1) translate(1%, 0%)', to: 'scale(1.12) translate(-1%, -2%)' },
  { from: 'scale(1.1) translate(0%, -1%)', to: 'scale(1) translate(-1%, 1%)' },
  { from: 'scale(1) translate(-1%, 1%)', to: 'scale(1.13) translate(1%, -1%)' },
  { from: 'scale(1.12) translate(1%, 0%)', to: 'scale(1) translate(0%, 1%)' },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState<number | null>(null)
  const [isFading, setIsFading] = useState(false)

  const advance = useCallback(() => {
    const next = (currentIndex + 1) % images.length
    setNextIndex(next)
    setIsFading(true)

    setTimeout(() => {
      setCurrentIndex(next)
      setNextIndex(null)
      setIsFading(false)
    }, FADE_DURATION)
  }, [currentIndex])

  useEffect(() => {
    const timer = setInterval(advance, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [advance])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        key={`slide-${currentIndex}`}
        className="absolute inset-0 animate-ken-burns"
        style={{
          opacity: isFading ? 0 : 1,
          transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          '--kb-from': kenBurnsVariants[currentIndex % kenBurnsVariants.length].from,
          '--kb-to': kenBurnsVariants[currentIndex % kenBurnsVariants.length].to,
          animationDuration: `${SLIDE_DURATION + FADE_DURATION}ms`,
        } as React.CSSProperties}
      >
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {nextIndex !== null && (
        <div
          key={`slide-${nextIndex}`}
          className="absolute inset-0 animate-ken-burns"
          style={{
            opacity: isFading ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            '--kb-from': kenBurnsVariants[nextIndex % kenBurnsVariants.length].from,
            '--kb-to': kenBurnsVariants[nextIndex % kenBurnsVariants.length].to,
            animationDuration: `${SLIDE_DURATION + FADE_DURATION}ms`,
          } as React.CSSProperties}
        >
          <img
            src={images[nextIndex]}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  )
}
