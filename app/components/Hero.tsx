'use client'
import { useEffect, useRef, useState } from 'react'

interface Crack {
  d: string
  w: number      // strokeWidth
  cls: string    // crack-main | crack-branch | crack-hair
  delay: string  // CSS animation-delay value
}

/**
 * Generate random kintsugi cracks radiating outward from the photo circle.
 * Circle center (300,300), radius 150 in the 600×600 SVG viewBox.
 * An SVG mask prevents any path from appearing inside the circle itself.
 */
function generateCracks(): Crack[] {
  const cx = 300, cy = 300, r = 153
  const cracks: Crack[] = []

  for (let i = 0; i < 26; i++) {
    const angle = Math.random() * Math.PI * 2
    const sx = cx + r * Math.cos(angle)
    const sy = cy + r * Math.sin(angle)
    const len = 55 + Math.random() * 195
    const segs = 2 + Math.floor(Math.random() * 3)

    let x = sx, y = sy
    let d = `M${x.toFixed(1)},${y.toFixed(1)}`
    for (let s = 0; s < segs; s++) {
      const sl = (len / segs) * (0.6 + Math.random() * 0.8)
      const drift = (Math.random() - 0.5) * 0.9
      x += sl * Math.cos(angle + drift)
      y += sl * Math.sin(angle + drift)
      d += ` L${x.toFixed(1)},${y.toFixed(1)}`
    }

    let cls: string, w: number, delay: string
    if (i < 7) {
      cls = 'crack crack-main'
      w = 1.5 + Math.random() * 1.5
      delay = '0s'
    } else if (i < 18) {
      cls = 'crack crack-branch'
      w = 0.8 + Math.random() * 0.9
      delay = `${(Math.random() * 0.25).toFixed(2)}s`
    } else {
      cls = 'crack crack-hair'
      w = 0.4 + Math.random() * 0.5
      delay = `${(0.2 + Math.random() * 0.5).toFixed(2)}s`
    }

    cracks.push({ d, w, cls, delay })
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

          {/* Fact cards revealed when cracks animate in */}
          <div className="kf kf-1">
            <span className="kf-label">Childhood pastime</span>
            <span className="kf-value">Video games</span>
          </div>
          <div className="kf kf-2">
            <span className="kf-label">Where I studied</span>
            <span className="kf-value">Georgia Tech · Stanford · MIT · Harvard</span>
          </div>
          <div className="kf kf-3">
            <span className="kf-label">How I unwind</span>
            <span className="kf-value">Photography · Coffee · Biking</span>
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
