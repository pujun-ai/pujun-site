'use client'
import { useEffect, useRef, useState } from 'react'

interface Crack {
  d: string
  w: number      // strokeWidth
  cls: string    // crack-main | crack-branch | crack-hair
  delay: string  // CSS animation-delay value
}

/**
 * Find where a ray from (ox, oy) in direction `angle` first hits the slab boundary.
 * Bounds are slightly larger than the 600×600 viewBox so cracks reach the very
 * top/bottom edges of hero-right (the SVG overflows ~55 viewBox units past the
 * viewBox edge in each vertical direction at typical viewport sizes).
 */
function rayToEdge(ox: number, oy: number, angle: number): [number, number] {
  const L = -20, R = 620, T = -60, B = 660
  const dx = Math.cos(angle), dy = Math.sin(angle)
  let t = Infinity
  if (dx >  1e-9) t = Math.min(t, (R - ox) / dx)
  if (dx < -1e-9) t = Math.min(t, (L - ox) / dx)
  if (dy >  1e-9) t = Math.min(t, (B - oy) / dy)
  if (dy < -1e-9) t = Math.min(t, (T - oy) / dy)
  return [ox + dx * t, oy + dy * t]
}

/**
 * Generate 7 kintsugi surface-fracture lines that traverse the full ceramic slab
 * (hero-right panel) from one edge to the other. The SVG mask hides each line
 * where it crosses the photo circle, so the cracks appear to travel under it.
 */
function generateCracks(): Crack[] {
  const cx = 300, cy = 300
  const cracks: Crack[] = []

  for (let i = 0; i < 7; i++) {
    // Evenly spaced base angle with randomisation so no two cycles look the same
    const baseAngle = (i / 7) * Math.PI * 2
    const angle = baseAngle + (Math.random() - 0.5) * 0.7

    // Both ends of the crack: opposite rays from the circle centre to the slab edges
    const [sx, sy] = rayToEdge(cx, cy, angle + Math.PI)
    const [ex, ey] = rayToEdge(cx, cy, angle)

    // Shift each crack sideways so they don't all pass through dead centre
    const perpX = -Math.sin(angle), perpY = Math.cos(angle)
    const offset = (Math.random() - 0.5) * 70
    const asx = sx + perpX * offset, asy = sy + perpY * offset
    const aex = ex + perpX * offset, aey = ey + perpY * offset

    // Build a jagged path with 3–5 kinks
    const segs = 3 + Math.floor(Math.random() * 3)
    let x = asx, y = asy
    let d = `M${x.toFixed(1)},${y.toFixed(1)}`
    for (let s = 0; s < segs; s++) {
      const t = (s + 1) / segs
      const bx = asx + (aex - asx) * t
      const by = asy + (aey - asy) * t
      const jitter = (Math.random() - 0.5) * 28
      if (s < segs - 1) {
        x = bx + perpX * jitter
        y = by + perpY * jitter
      } else {
        x = aex; y = aey   // last point hits the edge exactly
      }
      d += ` L${x.toFixed(1)},${y.toFixed(1)}`
    }

    cracks.push({
      d,
      w: 1.0 + Math.random() * 1.2,
      cls: i < 3 ? 'crack crack-main' : 'crack crack-branch',
      delay: `${(Math.random() * 0.2).toFixed(2)}s`,
    })
  }

  return cracks
}

export default function Hero() {
  const photoOuterRef = useRef<HTMLDivElement>(null)
  const [{ gen, cracks }, setTick] = useState(() => ({
    gen: 0,
    cracks: generateCracks(),
  }))

  // Toggle kintsugi-active when section enters viewport
  useEffect(() => {
    const el = photoOuterRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { el.classList.toggle('kintsugi-active', entry.isIntersecting) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Regenerate cracks every 5 s to sync with animation cycle
  useEffect(() => {
    const id = setInterval(
      () => setTick(prev => ({ gen: prev.gen + 1, cracks: generateCracks() })),
      5000
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">CEO &amp; Co-founder, Kintsugi</div>
        <h1 className="hero-name">
          Pujun<br />
          <em>Bhatnagar</em>
        </h1>
        <p className="hero-bio">
          I grew up in India. Represented my country at the International Math and Informatics
          Olympiads. Built machine learning systems used by billions. Now building Kintsugi
          in San Francisco.
          <br /><br />
          I like hard problems. I like beautiful cities. I take the long way home.
        </p>
        <div className="hero-ctas">
          <a href="#about" className="btn-primary">Read more ↓</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-outer" ref={photoOuterRef}>

          {/* Crack SVG — outside and behind the circle; mask keeps cracks out of the photo area */}
          <svg
            className="hero-crack-bg"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldCrack" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0" />
                <stop offset="35%"  stopColor="#F0E0A0" stopOpacity="1" />
                <stop offset="60%"  stopColor="#E8C84C" stopOpacity="1" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
              </linearGradient>
              <filter id="goldGlow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Punches out the circle — no crack lines can appear inside the photo */}
              <mask id="noCircle">
                <rect x="0" y="0" width="600" height="600" fill="white" />
                <circle cx="300" cy="300" r="150" fill="black" />
              </mask>
            </defs>

            <g mask="url(#noCircle)">
              {cracks.map((c, i) => (
                <path
                  key={`${gen}-${i}`}
                  className={c.cls}
                  pathLength="1"
                  d={c.d}
                  fill="none"
                  stroke="url(#goldCrack)"
                  strokeWidth={c.w}
                  filter={c.cls.includes('hair') ? undefined : 'url(#goldGlow)'}
                  style={{ animationDelay: c.delay }}
                />
              ))}
            </g>
          </svg>

          {/* Photo circle — stays intact throughout the animation */}
          <div className="hero-photo-circle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Pujun Bhatnagar"
              className="hero-photo"
            />
          </div>

        </div>
      </div>

      <div className="hero-stats-strip">
        <div className="hero-stat-col">
          <div className="hero-stat-label">Childhood pastime</div>
          <div className="hero-stat-value">Video games</div>
        </div>
        <div className="hero-stat-col">
          <div className="hero-stat-label">Where I studied</div>
          <div className="hero-stat-value">Georgia Tech · Stanford · MIT · Harvard</div>
        </div>
        <div className="hero-stat-col">
          <div className="hero-stat-label">How I unwind</div>
          <div className="hero-stat-value">Photography · Biking · Cooking · Making Coffee</div>
        </div>
      </div>
    </section>
  )
}
