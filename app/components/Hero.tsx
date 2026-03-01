export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">CEO &amp; Co-founder, Kintsugi</div>
        <h1 className="hero-name">
          Pujun<br />
          <em>Bhatnagar</em>
        </h1>
        <p className="hero-bio">
          A builder who grew up across India, China, and Dubai.
          Now running Kintsugi in San Francisco — and still finding time
          to wander with a camera, ride bikes, and take the long way home.
        </p>
        <div className="hero-ctas">
          <a href="#about" className="btn-primary">Read more ↓</a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-placeholder">
          {/* Profile photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="Pujun Bhatnagar"
            className="hero-photo"
          />
          {/* Kintsugi crack SVG overlay */}
          <svg
            className="hero-crack-overlay"
            viewBox="0 0 600 700"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="goldCrack" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0" />
                <stop offset="40%"  stopColor="#E8D5A0" stopOpacity="1" />
                <stop offset="60%"  stopColor="#C9A84C" stopOpacity="1" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M120 0 L180 140 L140 200 L210 340 L170 420 L230 560 L200 700"
              fill="none" stroke="url(#goldCrack)" strokeWidth="1.2" />
            <path d="M180 140 L280 180 L340 150 L420 220"
              fill="none" stroke="url(#goldCrack)" strokeWidth="0.7" />
            <path d="M210 340 L310 360 L380 320 L480 380 L520 340"
              fill="none" stroke="url(#goldCrack)" strokeWidth="0.8" />
            <path d="M380 0 L420 80 L360 160 L400 260 L370 350 L440 460 L400 600"
              fill="none" stroke="url(#goldCrack)" strokeWidth="1" />
            <path d="M420 80 L500 100 L560 70"
              fill="none" stroke="url(#goldCrack)" strokeWidth="0.6" />
            <path d="M140 200 L80 260 L110 330"
              fill="none" stroke="url(#goldCrack)" strokeWidth="0.6" />
          </svg>

          <div className="hero-stat-stack">
            <div className="hero-stat hero-stat--text">India · China · Dubai</div>
            <div className="hero-stat-label">Where I grew up</div>
            <div className="hero-stat hero-stat--text">Stanford · MIT · Harvard</div>
            <div className="hero-stat-label">Where I studied</div>
            <div className="hero-stat hero-stat--text">Photography · Biking · Hiking</div>
            <div className="hero-stat-label">How I unwind</div>
          </div>
        </div>
      </div>
    </section>
  )
}
