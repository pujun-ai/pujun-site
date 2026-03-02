'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const photoOuterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = photoOuterRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('kintsugi-active', entry.isIntersecting)
      },
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
        {/* Outer wrapper — reference for IntersectionObserver & fact positioning */}
        <div className="hero-photo-outer" ref={photoOuterRef}>

          {/* Circular photo + cracks (overflow hidden clips to circle) */}
          <div className="hero-photo-circle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Pujun Bhatnagar"
              className="hero-photo"
            />

            {/* Kintsugi crack SVG — draws in via stroke-dashoffset animation */}
            <svg
              className="hero-crack-overlay"
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
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
              </defs>

              {/* Main vertical cracks */}
              <path className="crack crack-main crack-1" pathLength="1"
                d="M120 0 L180 120 L140 171 L210 291 L170 360 L230 480 L200 600"
                fill="none" stroke="url(#goldCrack)" strokeWidth="2.5" filter="url(#goldGlow)" />
              <path className="crack crack-main crack-2" pathLength="1"
                d="M380 0 L420 69 L360 137 L400 223 L370 300 L440 394 L400 514"
                fill="none" stroke="url(#goldCrack)" strokeWidth="2" filter="url(#goldGlow)" />

              {/* Branch cracks */}
              <path className="crack crack-branch crack-3" pathLength="1"
                d="M180 120 L280 154 L340 129 L420 189"
                fill="none" stroke="url(#goldCrack)" strokeWidth="1.4" filter="url(#goldGlow)" />
              <path className="crack crack-branch crack-4" pathLength="1"
                d="M210 291 L310 309 L380 274 L480 326 L520 291"
                fill="none" stroke="url(#goldCrack)" strokeWidth="1.6" filter="url(#goldGlow)" />

              {/* Hairline details */}
              <path className="crack crack-hair crack-5" pathLength="1"
                d="M420 69 L500 86 L560 60"
                fill="none" stroke="url(#goldCrack)" strokeWidth="1.2" />
              <path className="crack crack-hair crack-6" pathLength="1"
                d="M140 171 L80 223 L110 283"
                fill="none" stroke="url(#goldCrack)" strokeWidth="1.2" />
              <path className="crack crack-hair crack-7" pathLength="1"
                d="M170 360 L110 386 L130 446"
                fill="none" stroke="url(#goldCrack)" strokeWidth="0.8" />
              <path className="crack crack-hair crack-8" pathLength="1"
                d="M370 300 L310 334 L330 394"
                fill="none" stroke="url(#goldCrack)" strokeWidth="0.8" />
            </svg>
          </div>

          {/* Facts revealed by the cracks — positioned over the circle */}
          <div className="kf kf-1">
            <span className="kf-label">Childhood pastime</span>
            <span className="kf-value">Video games</span>
          </div>
          <div className="kf kf-2">
            <span className="kf-label">Where I studied</span>
            <span className="kf-value">Stanford · MIT · Harvard</span>
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
          <div className="hero-stat-value">Stanford · MIT · Harvard</div>
        </div>
        <div className="hero-stat-col">
          <div className="hero-stat-label">How I unwind</div>
          <div className="hero-stat-value">Photography · Biking · Cooking · Making Coffee</div>
        </div>
      </div>
    </section>
  )
}
