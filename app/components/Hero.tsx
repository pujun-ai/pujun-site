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
        <div className="hero-photo-outer">
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
