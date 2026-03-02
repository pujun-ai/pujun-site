'use client'
import { useEffect, useRef } from 'react'

/**
 * VEINS — thick gold seams rendered with two overlapping layers:
 *   base layer  : wide (w+5px), dark bronze-gold  — body of the repair fill
 *   highlight   : narrow (w px),  bright gold + glow — metallic ridge sheen
 *
 * Every path begins AT the photo-circle boundary or at a named node point so
 * the stroke-dashoffset draw-in animates from circle → panel edge.
 *
 * Node coordinates (junctions where veins branch):
 *   UL  (140, 110)   upper-left
 *   UR  (482,  92)   upper-right  ← largest, most visible blob
 *   R   (548, 228)   right
 *   LR  (514, 468)   lower-right
 *   LL  (120, 480)   lower-left
 *   L   ( 68, 296)   left
 */
const VEINS = [
  // ── 8 primary veins radiating from the circle boundary ─────────────────

  // 225 ° (upper-left): circle → node UL → top-left corner
  { d: 'M 194,194 C 172,164 152,136 140,110 C 122,80 70,44 -20,20',
    w: 8, cls: 'crack-main',   delay: '0s'    },
  // Branch from UL → left-upper edge
  { d: 'M 140,110 C 108,118 64,132 -20,158',
    w: 6, cls: 'crack-branch', delay: '0.08s' },

  // 270 ° (top): circle → top edge
  { d: 'M 300,150 C 300,96 300,38 304,-55',
    w: 8, cls: 'crack-main',   delay: '0.02s' },

  // 315 ° (upper-right): circle → node UR → top-right corner
  { d: 'M 406,194 C 436,158 460,126 482,92 C 506,58 542,10 574,-55',
    w: 8, cls: 'crack-main',   delay: '0.01s' },
  // Branch from UR downward → node R
  { d: 'M 482,92 C 512,130 536,174 548,228',
    w: 6, cls: 'crack-branch', delay: '0.09s' },

  //   0 ° (right): circle → node R → right edge
  { d: 'M 450,300 C 488,278 518,256 548,228 C 568,208 594,198 620,192',
    w: 8, cls: 'crack-main',   delay: '0.03s' },
  // Second arm right (below main right vein)
  { d: 'M 450,300 C 502,306 558,312 620,318',
    w: 5, cls: 'crack-branch', delay: '0.06s' },

  //  45 ° (lower-right): circle → node LR → bottom-right corner
  { d: 'M 406,406 C 444,432 480,452 514,468 C 546,484 586,530 620,580',
    w: 8, cls: 'crack-main',   delay: '0.01s' },
  // Branch from LR → bottom edge
  { d: 'M 514,468 C 494,506 462,530 436,554 C 408,576 382,610 358,660',
    w: 6, cls: 'crack-branch', delay: '0.09s' },

  //  90 ° (bottom): circle → bottom edge
  { d: 'M 300,450 C 302,502 310,550 318,596 C 323,628 328,648 332,660',
    w: 8, cls: 'crack-main',   delay: '0.02s' },

  // 135 ° (lower-left): circle → node LL → bottom-left edge
  { d: 'M 194,406 C 162,432 136,458 120,480 C 98,508 56,558 -20,608',
    w: 8, cls: 'crack-main',   delay: '0.01s' },

  // 180 ° (left): circle → node L → left edge
  { d: 'M 150,300 C 112,298 88,296 68,296 C 44,296 14,296 -20,298',
    w: 8, cls: 'crack-main',   delay: '0.02s' },
  // Branch from L downward → connects to node LL
  { d: 'M 68,296 C 68,350 80,412 120,480',
    w: 5, cls: 'crack-branch', delay: '0.10s' },

  // ── Secondary connectors (create enclosed cells between the radial veins) ─

  // Top cross-bar: node UL (140,110) → node UR (482,92)  — "roof" above circle
  { d: 'M 140,110 C 228,94 358,88 482,92',
    w: 6, cls: 'crack-branch', delay: '0.12s' },

  // Right connector: node R (548,228) → node LR (514,468)
  { d: 'M 548,228 C 546,308 538,398 514,468',
    w: 5, cls: 'crack-branch', delay: '0.14s' },
]

/** Blob nodes rendered as filled ellipses at every vein junction */
const NODES = [
  { x: 140, y: 110, rx: 17, ry: 13 },  // UL
  { x: 482, y:  92, rx: 28, ry: 22 },  // UR — largest, most prominent
  { x: 548, y: 228, rx: 19, ry: 15 },  // R
  { x: 514, y: 468, rx: 21, ry: 16 },  // LR
  { x: 120, y: 480, rx: 18, ry: 14 },  // LL
  { x:  68, y: 296, rx: 17, ry: 13 },  // L
]

/**
 * Micro-crack hairlines — thin dark short paths that texture the ceramic
 * panels between the gold veins. Static (no draw-in animation), low opacity.
 */
const HAIRLINES = [
  // Upper-left panel
  'M 92,78 C 82,94 68,108 58,124',
  'M 48,52 C 62,66 76,80 84,96',
  'M 108,62 C 100,78 90,92 80,106',
  // Upper-centre panel (between top vein and cross-bar)
  'M 248,68 C 256,82 262,96 264,110',
  'M 328,72 C 334,86 336,100 334,113',
  // Upper-right panel
  'M 510,42 C 526,56 534,70 532,84',
  'M 558,28 C 556,46 552,62 544,76',
  // Right panel
  'M 548,162 C 560,178 564,194 558,210',
  'M 584,242 C 592,260 594,276 588,292',
  // Lower-right panel
  'M 578,438 C 566,454 558,470 556,486',
  'M 542,522 C 530,538 524,554 522,568',
  // Lower-centre panel
  'M 354,520 C 362,534 365,550 360,564',
  'M 394,584 C 380,598 372,612 370,626',
  // Lower-left panel
  'M 96,528 C 84,516 74,506 68,494',
  'M 42,566 C 54,554 64,544 70,532',
  // Left panel
  'M 88,342 C 76,360 68,378 68,394',
  'M 52,252 C 64,270 74,288 82,305',
]

export default function Hero() {
  const photoOuterRef = useRef<HTMLDivElement>(null)

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

          <svg
            className="hero-crack-bg"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/*
                Diagonal gradient — the 0°→100° sweep means diagonal paths
                get a natural dark→bright→dark shimmer along their length.
              */}
              <linearGradient id="goldVein" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#9A7020" stopOpacity="0.85" />
                <stop offset="25%"  stopColor="#E8C040" stopOpacity="1"    />
                <stop offset="50%"  stopColor="#F5E080" stopOpacity="1"    />
                <stop offset="75%"  stopColor="#E8C040" stopOpacity="1"    />
                <stop offset="100%" stopColor="#9A7020" stopOpacity="0.85" />
              </linearGradient>

              {/* Radial gradient for blob nodes — pools of gold at junctions */}
              <radialGradient id="goldNode" cx="38%" cy="32%" r="62%">
                <stop offset="0%"   stopColor="#FFF0B0" />
                <stop offset="45%"  stopColor="#D4A030" />
                <stop offset="100%" stopColor="#7A5510" />
              </radialGradient>

              {/* Outer glow for highlight layer and nodes */}
              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/*
                Mask: show everything EXCEPT the photo circle interior.
                Rect is oversized so paths that bleed outside the viewBox
                (top/bottom edge bleed) are still correctly masked.
              */}
              <mask id="noCircle">
                <rect x="-20" y="-60" width="640" height="720" fill="white" />
                <circle cx="300" cy="300" r="150" fill="black" />
              </mask>
            </defs>

            {/* ── Micro-crack texture (static, no draw-in animation) ──────── */}
            <g mask="url(#noCircle)" opacity="0.45">
              {HAIRLINES.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="#0E0C06"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                />
              ))}
            </g>

            {/* ── Base layer: wide dark-bronze strokes (body of the gold seam) ── */}
            <g mask="url(#noCircle)">
              {VEINS.map((v, i) => (
                <path
                  key={`base-${i}`}
                  className={`crack ${v.cls}`}
                  pathLength="1"
                  d={v.d}
                  fill="none"
                  stroke="#7A5510"
                  strokeWidth={v.w + 5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ animationDelay: v.delay }}
                />
              ))}
            </g>

            {/* ── Highlight layer: bright gold + glow (metallic ridge sheen) ── */}
            <g mask="url(#noCircle)" filter="url(#goldGlow)">
              {VEINS.map((v, i) => (
                <path
                  key={`hi-${i}`}
                  className={`crack ${v.cls}`}
                  pathLength="1"
                  d={v.d}
                  fill="none"
                  stroke="url(#goldVein)"
                  strokeWidth={v.w}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ animationDelay: v.delay }}
                />
              ))}
            </g>

            {/* ── Node blobs at every junction ───────────────────────────────── */}
            <g mask="url(#noCircle)" filter="url(#goldGlow)">
              {NODES.map((n, i) => (
                <ellipse
                  key={`node-${i}`}
                  className="crack crack-main"
                  cx={n.x}
                  cy={n.y}
                  rx={n.rx}
                  ry={n.ry}
                  fill="url(#goldNode)"
                  stroke="none"
                  style={{ animationDelay: '0.25s' }}
                />
              ))}
            </g>

            {/*
              Gold ring around the photo circle — NOT inside the mask so it
              straddles the circle boundary and is always visible.
              Draws in as a stroke animation (same class as main veins).
            */}
            <circle
              cx="300" cy="300" r="152"
              fill="none"
              stroke="url(#goldVein)"
              strokeWidth="5"
              className="crack crack-main"
              pathLength="1"
              style={{ animationDelay: '0.2s' }}
            />
          </svg>

          {/* Photo circle — sits above the SVG layer */}
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
