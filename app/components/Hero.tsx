import PeacockCorner from './PeacockCorner'
import FeatherBg from './FeatherBg'

export default function Hero() {
  return (
    <section className="hero">
      <PeacockCorner />
      <div className="hero-left">
        <FeatherBg />
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
              {/* ── CENTER ── */}
              <circle r="5"/>
              <circle r="15" fill="none" stroke="currentColor" strokeWidth="1.5"/>

              {/* ── 8 INNER TEARDROP BUDS ── */}
              <path d="M0,-20 C3,-24 3,-30 0,-34 C-3,-30 -3,-24 0,-20Z"/>
              <path d="M0,-20 C3,-24 3,-30 0,-34 C-3,-30 -3,-24 0,-20Z" transform="rotate(45)"/>
              <path d="M0,-20 C3,-24 3,-30 0,-34 C-3,-30 -3,-24 0,-20Z" transform="rotate(90)"/>
              <path d="M0,-20 C3,-24 3,-30 0,-34 C-3,-30 -3,-24 0,-20Z" transform="rotate(135)"/>
              <path d="M0,-20 C3,-24 3,-30 0,-34 C-3,-30 -3,-24 0,-20Z" transform="rotate(180)"/>
              <path d="M0,-20 C3,-24 3,-30 0,-34 C-3,-30 -3,-24 0,-20Z" transform="rotate(225)"/>
              <path d="M0,-20 C3,-24 3,-30 0,-34 C-3,-30 -3,-24 0,-20Z" transform="rotate(270)"/>
              <path d="M0,-20 C3,-24 3,-30 0,-34 C-3,-30 -3,-24 0,-20Z" transform="rotate(315)"/>

              {/* ── MID RING ── */}
              <circle r="42" fill="none" stroke="currentColor" strokeWidth="1"/>

              {/* ── 8 PEACOCK FEATHERS ── */}
              {/* Each: quill stem + body with eye-hole (fill-rule evenodd) + pupil */}
              <g>
                <path d="M0,-44 C0.5,-48 0,-52 0,-54" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path fillRule="evenodd" d="M0,-54 C13,-62 14,-77 0,-89 C-14,-77 -13,-62 0,-54Z M0,-59 C7,-65 8,-77 0,-84 C-8,-77 -7,-65 0,-59Z"/>
                <circle cy="-73" r="3.5"/>
              </g>
              <g transform="rotate(45)">
                <path d="M0,-44 C0.5,-48 0,-52 0,-54" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path fillRule="evenodd" d="M0,-54 C13,-62 14,-77 0,-89 C-14,-77 -13,-62 0,-54Z M0,-59 C7,-65 8,-77 0,-84 C-8,-77 -7,-65 0,-59Z"/>
                <circle cy="-73" r="3.5"/>
              </g>
              <g transform="rotate(90)">
                <path d="M0,-44 C0.5,-48 0,-52 0,-54" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path fillRule="evenodd" d="M0,-54 C13,-62 14,-77 0,-89 C-14,-77 -13,-62 0,-54Z M0,-59 C7,-65 8,-77 0,-84 C-8,-77 -7,-65 0,-59Z"/>
                <circle cy="-73" r="3.5"/>
              </g>
              <g transform="rotate(135)">
                <path d="M0,-44 C0.5,-48 0,-52 0,-54" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path fillRule="evenodd" d="M0,-54 C13,-62 14,-77 0,-89 C-14,-77 -13,-62 0,-54Z M0,-59 C7,-65 8,-77 0,-84 C-8,-77 -7,-65 0,-59Z"/>
                <circle cy="-73" r="3.5"/>
              </g>
              <g transform="rotate(180)">
                <path d="M0,-44 C0.5,-48 0,-52 0,-54" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path fillRule="evenodd" d="M0,-54 C13,-62 14,-77 0,-89 C-14,-77 -13,-62 0,-54Z M0,-59 C7,-65 8,-77 0,-84 C-8,-77 -7,-65 0,-59Z"/>
                <circle cy="-73" r="3.5"/>
              </g>
              <g transform="rotate(225)">
                <path d="M0,-44 C0.5,-48 0,-52 0,-54" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path fillRule="evenodd" d="M0,-54 C13,-62 14,-77 0,-89 C-14,-77 -13,-62 0,-54Z M0,-59 C7,-65 8,-77 0,-84 C-8,-77 -7,-65 0,-59Z"/>
                <circle cy="-73" r="3.5"/>
              </g>
              <g transform="rotate(270)">
                <path d="M0,-44 C0.5,-48 0,-52 0,-54" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path fillRule="evenodd" d="M0,-54 C13,-62 14,-77 0,-89 C-14,-77 -13,-62 0,-54Z M0,-59 C7,-65 8,-77 0,-84 C-8,-77 -7,-65 0,-59Z"/>
                <circle cy="-73" r="3.5"/>
              </g>
              <g transform="rotate(315)">
                <path d="M0,-44 C0.5,-48 0,-52 0,-54" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path fillRule="evenodd" d="M0,-54 C13,-62 14,-77 0,-89 C-14,-77 -13,-62 0,-54Z M0,-59 C7,-65 8,-77 0,-84 C-8,-77 -7,-65 0,-59Z"/>
                <circle cy="-73" r="3.5"/>
              </g>

              {/* ── OUTER RING ── */}
              <circle r="94" fill="none" stroke="currentColor" strokeWidth="0.75"/>

              {/* ── 8 ACCENT DOTS at 22.5° offsets ── */}
              <circle cy="-99" r="2" transform="rotate(22.5)"/>
              <circle cy="-99" r="2" transform="rotate(67.5)"/>
              <circle cy="-99" r="2" transform="rotate(112.5)"/>
              <circle cy="-99" r="2" transform="rotate(157.5)"/>
              <circle cy="-99" r="2" transform="rotate(202.5)"/>
              <circle cy="-99" r="2" transform="rotate(247.5)"/>
              <circle cy="-99" r="2" transform="rotate(292.5)"/>
              <circle cy="-99" r="2" transform="rotate(337.5)"/>
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
