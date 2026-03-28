export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">San Francisco &nbsp;·&nbsp; 東京</div>
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
        <div className="hero-kanji">旅</div>
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
          <div className="hero-stat-value">Wes Montgomery — Down Here on the Ground</div>
        </div>
        <div className="hero-stat-col">
          <div className="hero-stat-label">Last visited</div>
          <div className="hero-stat-value">Daikanyama · Tokyo</div>
        </div>
        <div className="hero-stat-col">
          <div className="hero-stat-label">Currently shooting</div>
          <div className="hero-stat-value">Fujifilm X-T6 · Acros simulation</div>
        </div>
      </div>
    </section>
  )
}
