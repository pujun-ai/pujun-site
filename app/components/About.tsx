export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">
            Builder.<br /><em>Olympian.</em><br />Photographer.
          </h2>
          <p>
            I grew up in India, shaped most by two people: my <strong>mother and my sister</strong>.
            They taught me how to pay attention, how to be curious, and how to care about the
            things that are easy to overlook. Everything I&apos;ve done since has been an extension
            of what I learned from them.
          </p>
          <p>
            My life changed when I got the chance to <strong>represent India at the International
            Mathematical Olympiad and the International Olympiad in Informatics</strong>. Competing
            at the highest level, surrounded by people who loved hard problems, rewired how I think
            about everything. Travel did the rest. Years of wandering through <strong>China, Dubai,
            Thailand, and Malaysia</strong> taught me to see the world in texture and contradiction,
            and to find something worth photographing in every city I&apos;ve ever landed in.
          </p>
          <p>
            I&apos;m now the CEO and co-founder of <strong>Kintsugi</strong> in San Francisco, where
            we&apos;re using AI to automate sales tax compliance for modern internet businesses.
            Before that, I was the <strong>first machine learning person and a Senior Engineer
            at Facebook</strong> on the Stories Team, where the work became the ML backbone behind
            Instagram Stories, Facebook Stories, WhatsApp Stories, and Meta&apos;s unified story ranking.
            Somehow I still find time to wander with a camera, ride a road bike, and take the
            longest route home.
          </p>
        </div>
        <div className="about-facts">
          <div className="fact-row">
            <span className="fact-label">Based in</span>
            <span className="fact-value">San Francisco, CA</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Education</span>
            <span className="fact-value">Stanford · MIT · Harvard</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Grew up in</span>
            <span className="fact-value">India</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Represented</span>
            <span className="fact-value">India, IMO &amp; IOI</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Previously</span>
            <span className="fact-value">Senior ML Engineer, Meta</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Company</span>
            <span className="fact-value">Kintsugi (CEO)</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Unwind</span>
            <span className="fact-value">Photography · Road Biking · Hiking</span>
          </div>
        </div>
      </div>
    </section>
  )
}
