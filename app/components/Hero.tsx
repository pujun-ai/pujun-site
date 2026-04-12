export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">San Francisco &nbsp;·&nbsp; Delhi</div>
        <h1 className="hero-name">
          Pujun<br />
          <em>Bhatnagar</em>
        </h1>
        <p className="hero-bio">
          I love traveling to beautiful cities and taking the long way home. This website is a
          reflection of who I am, what I do in my spare time, and how I got here.
        </p>
        <div className="hero-ctas">
          <a href="#about" className="btn-primary">Read more ↓</a>
        </div>
      </div>

      <div className="hero-right">
        {/* Henna mandala — mehndi decorative element */}
        <div className="hero-henna" aria-hidden="true">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <g transform="translate(100,100)">
              {/* Center dot */}
              <circle r="5"/>
              {/* Inner 8 dots at r=18 */}
              <circle cy="-18" r="2.5"/>
              <circle cy="-18" r="2.5" transform="rotate(45)"/>
              <circle cy="-18" r="2.5" transform="rotate(90)"/>
              <circle cy="-18" r="2.5" transform="rotate(135)"/>
              <circle cy="-18" r="2.5" transform="rotate(180)"/>
              <circle cy="-18" r="2.5" transform="rotate(225)"/>
              <circle cy="-18" r="2.5" transform="rotate(270)"/>
              <circle cy="-18" r="2.5" transform="rotate(315)"/>
              {/* Inner stroke ring */}
              <circle r="26" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              {/* 8 diamonds at r=38 */}
              <path d="M0,-41 3.5,-38 0,-35 -3.5,-38Z"/>
              <path d="M0,-41 3.5,-38 0,-35 -3.5,-38Z" transform="rotate(45)"/>
              <path d="M0,-41 3.5,-38 0,-35 -3.5,-38Z" transform="rotate(90)"/>
              <path d="M0,-41 3.5,-38 0,-35 -3.5,-38Z" transform="rotate(135)"/>
              <path d="M0,-41 3.5,-38 0,-35 -3.5,-38Z" transform="rotate(180)"/>
              <path d="M0,-41 3.5,-38 0,-35 -3.5,-38Z" transform="rotate(225)"/>
              <path d="M0,-41 3.5,-38 0,-35 -3.5,-38Z" transform="rotate(270)"/>
              <path d="M0,-41 3.5,-38 0,-35 -3.5,-38Z" transform="rotate(315)"/>
              {/* Middle stroke ring */}
              <circle r="48" fill="none" stroke="currentColor" strokeWidth="1"/>
              {/* 16 small dots at r=58 */}
              <circle cy="-58" r="1.5"/>
              <circle cy="-58" r="1.5" transform="rotate(22.5)"/>
              <circle cy="-58" r="1.5" transform="rotate(45)"/>
              <circle cy="-58" r="1.5" transform="rotate(67.5)"/>
              <circle cy="-58" r="1.5" transform="rotate(90)"/>
              <circle cy="-58" r="1.5" transform="rotate(112.5)"/>
              <circle cy="-58" r="1.5" transform="rotate(135)"/>
              <circle cy="-58" r="1.5" transform="rotate(157.5)"/>
              <circle cy="-58" r="1.5" transform="rotate(180)"/>
              <circle cy="-58" r="1.5" transform="rotate(202.5)"/>
              <circle cy="-58" r="1.5" transform="rotate(225)"/>
              <circle cy="-58" r="1.5" transform="rotate(247.5)"/>
              <circle cy="-58" r="1.5" transform="rotate(270)"/>
              <circle cy="-58" r="1.5" transform="rotate(292.5)"/>
              <circle cy="-58" r="1.5" transform="rotate(315)"/>
              <circle cy="-58" r="1.5" transform="rotate(337.5)"/>
              {/* Outer stroke ring */}
              <circle r="68" fill="none" stroke="currentColor" strokeWidth="1"/>
              {/* 8 petals at r=76 */}
              <ellipse cx="0" cy="-76" rx="5" ry="12"/>
              <ellipse cx="0" cy="-76" rx="5" ry="12" transform="rotate(45)"/>
              <ellipse cx="0" cy="-76" rx="5" ry="12" transform="rotate(90)"/>
              <ellipse cx="0" cy="-76" rx="5" ry="12" transform="rotate(135)"/>
              <ellipse cx="0" cy="-76" rx="5" ry="12" transform="rotate(180)"/>
              <ellipse cx="0" cy="-76" rx="5" ry="12" transform="rotate(225)"/>
              <ellipse cx="0" cy="-76" rx="5" ry="12" transform="rotate(270)"/>
              <ellipse cx="0" cy="-76" rx="5" ry="12" transform="rotate(315)"/>
              {/* Outermost ring */}
              <circle r="88" fill="none" stroke="currentColor" strokeWidth="0.75"/>
              {/* 8 outer accent dots at 22.5° offset */}
              <circle cy="-94" r="2" transform="rotate(22.5)"/>
              <circle cy="-94" r="2" transform="rotate(67.5)"/>
              <circle cy="-94" r="2" transform="rotate(112.5)"/>
              <circle cy="-94" r="2" transform="rotate(157.5)"/>
              <circle cy="-94" r="2" transform="rotate(202.5)"/>
              <circle cy="-94" r="2" transform="rotate(247.5)"/>
              <circle cy="-94" r="2" transform="rotate(292.5)"/>
              <circle cy="-94" r="2" transform="rotate(337.5)"/>
            </g>
          </svg>
        </div>
        <div className="hero-photo-outer">
          <div className="hero-photo-frame">
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
          <div className="hero-stat-label">Now listening</div>
          <div className="hero-stat-value">Arijit Singh</div>
        </div>
        <div className="hero-stat-col">
          <div className="hero-stat-label">Last visited</div>
          <div className="hero-stat-value">Delhi · India</div>
        </div>
        <div className="hero-stat-col">
          <div className="hero-stat-label">Currently shooting</div>
          <div className="hero-stat-value">Fujifilm X-T6 · Acros simulation</div>
        </div>
      </div>
    </section>
  )
}
