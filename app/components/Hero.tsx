'use client'
import { useEffect, useRef } from 'react'

/**
 * Hand-crafted kintsugi crack paths.
 *
 * Coordinate space: 600×600 SVG viewBox; photo circle at (300,300) r=150.
 * Paths use cubic bézier curves (C) for smooth, organic shapes — no random
 * generation. The same pattern draws in every 5-second animation cycle.
 *
 * Structure (mirrors the kintsugi bowl reference):
 *   • Two main fractures form an X across the slab, crossing inside the
 *     circle (masked) and emerging on opposite sides.
 *   • An upper connector joins the two mains above the circle, enclosing a
 *     trapezoidal region at the top.
 *   • A lower connector joins them below the circle, enclosing another region.
 *   • Three branches radiate outward from the junction nodes to the slab edges.
 */
const CRACKS = [
  // ── Main fracture 1: upper-right → lower-left ──────────────────────────
  {
    d: 'M 490,-55 C 465,40 435,115 400,170 C 365,225 325,268 295,305 C 260,345 220,390 190,450 C 165,510 128,580 90,660',
    w: 1.9, cls: 'crack crack-main', delay: '0s',
  },
  // ── Main fracture 2: upper-left → lower-right ──────────────────────────
  {
    d: 'M 100,-55 C 130,40 165,115 200,170 C 235,225 275,268 305,305 C 340,345 382,392 412,450 C 438,510 464,580 492,660',
    w: 1.9, cls: 'crack crack-main', delay: '0.04s',
  },
  // ── Upper connector: joins the two mains above the circle ──────────────
  // Creates an enclosed trapezoidal region between the top entries and the circle
  {
    d: 'M 165,115 C 225,107 275,102 300,101 C 325,100 375,107 435,115',
    w: 1.3, cls: 'crack crack-branch', delay: '0.1s',
  },
  // ── Branch: top-left corner from the upper-left junction ───────────────
  {
    d: 'M 165,115 C 120,96 68,72 18,46 C -2,34 -14,18 -20,6',
    w: 1.0, cls: 'crack crack-branch', delay: '0.14s',
  },
  // ── Branch: top-right corner from the upper-right junction ────────────
  {
    d: 'M 435,115 C 480,96 532,72 582,46 C 602,34 614,18 620,6',
    w: 1.0, cls: 'crack crack-branch', delay: '0.14s',
  },
  // ── Small branch: upward spur from the upper connector midpoint ────────
  {
    d: 'M 300,101 C 296,68 282,28 268,-22',
    w: 0.8, cls: 'crack crack-branch', delay: '0.18s',
  },
  // ── Lower connector: joins the two mains below the circle ─────────────
  // Creates an enclosed region between the circle base and the lower branches
  {
    d: 'M 188,468 C 232,457 275,454 300,455 C 325,456 368,460 412,468',
    w: 1.3, cls: 'crack crack-branch', delay: '0.1s',
  },
  // ── Branch: lower-right from the lower-right junction ─────────────────
  {
    d: 'M 412,468 C 456,450 508,428 558,404 C 582,392 604,378 620,366',
    w: 0.9, cls: 'crack crack-branch', delay: '0.2s',
  },
]

export default function Hero() {
  const photoOuterRef = useRef<HTMLDivElement>(null)

  // Toggle kintsugi-active when the section enters the viewport
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

          {/* Crack SVG — sits behind the circle; mask hides lines inside the photo */}
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
              {/*
                Mask: white everywhere except the photo circle (black = transparent).
                The rect is oversized to cover paths that extend beyond the viewBox.
              */}
              <mask id="noCircle">
                <rect x="-20" y="-60" width="640" height="720" fill="white" />
                <circle cx="300" cy="300" r="150" fill="black" />
              </mask>
            </defs>

            <g mask="url(#noCircle)">
              {CRACKS.map((c, i) => (
                <path
                  key={i}
                  className={c.cls}
                  pathLength="1"
                  d={c.d}
                  fill="none"
                  stroke="url(#goldCrack)"
                  strokeWidth={c.w}
                  filter="url(#goldGlow)"
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
