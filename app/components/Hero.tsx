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
        {/* Outer wrapper — reference for IntersectionObserver & fact card positioning */}
        <div className="hero-photo-outer" ref={photoOuterRef}>

          {/* Kintsugi crack SVG — lives OUTSIDE the circle so lines bleed into the page background */}
          <svg
            className="hero-crack-bg"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
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

              {/* Main cracks — run along the far left and far right edges of the frame.
                  Shard clip-paths match these paths so the pixel-split avoids the face. */}
              <path className="crack crack-main crack-1" pathLength="1"
                d="M72,0 L90,120 L65,200 L88,320 L70,450 L80,620"
                fill="none" stroke="url(#goldCrack)" strokeWidth="2.5" filter="url(#goldGlow)" />
              <path className="crack crack-main crack-2" pathLength="1"
                d="M510,0 L488,120 L514,200 L492,320 L516,450 L500,620"
                fill="none" stroke="url(#goldCrack)" strokeWidth="2" filter="url(#goldGlow)" />

              {/* Bridge cracks — span the face horizontally (visual gold lines only, no shard split) */}
              <path className="crack crack-branch crack-3" pathLength="1"
                d="M90,120 L200,140 L300,120 L400,140 L488,120"
                fill="none" stroke="url(#goldCrack)" strokeWidth="1.4" filter="url(#goldGlow)" />
              <path className="crack crack-branch crack-4" pathLength="1"
                d="M88,320 L200,340 L310,325 L420,335 L492,320"
                fill="none" stroke="url(#goldCrack)" strokeWidth="1.6" filter="url(#goldGlow)" />

              {/* Corner hairlines — reaching the circle boundary at edges */}
              <path className="crack crack-hair crack-5" pathLength="1"
                d="M510,0 L560,50 L600,30"
                fill="none" stroke="url(#goldCrack)" strokeWidth="1.2" />
              <path className="crack crack-hair crack-6" pathLength="1"
                d="M65,200 L30,220 L0,250"
                fill="none" stroke="url(#goldCrack)" strokeWidth="1.2" />
              <path className="crack crack-hair crack-7" pathLength="1"
                d="M70,450 L30,470 L0,500"
                fill="none" stroke="url(#goldCrack)" strokeWidth="0.8" />
              <path className="crack crack-hair crack-8" pathLength="1"
                d="M516,450 L560,480 L600,510"
                fill="none" stroke="url(#goldCrack)" strokeWidth="0.8" />
            </svg>

          {/* Circle frame — clips photo + shards to circle; sits above the crack bg */}
          <div className="hero-photo-circle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Pujun Bhatnagar"
              className="hero-photo"
            />

            {/* Photo shards — visible during animation, slide apart on break */}
            <div className="shard shard-left"  style={{ backgroundImage: "url('/profile.jpg')" }} />
            <div className="shard shard-mid"   style={{ backgroundImage: "url('/profile.jpg')" }} />
            <div className="shard shard-right" style={{ backgroundImage: "url('/profile.jpg')" }} />
          </div>

          {/* Facts revealed by the cracks — positioned over the circle */}
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
