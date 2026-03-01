export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">
            Builder.<br /><em>Thinker.</em><br />Photographer.
          </h2>
          <p>
            I grew up across <strong>India, China, and Dubai</strong> — three completely different
            worlds that somehow made sense together. Moving between cultures taught me to notice
            what most people walk past, and to find beauty in the seams between things.
          </p>
          <p>
            I&apos;m now the CEO and co-founder of <strong>Kintsugi</strong> in San Francisco, where
            we&apos;re automating sales tax compliance for modern internet businesses. Before that, I
            worked on <strong>machine learning at Meta</strong>, and studied across
            <strong>Stanford, MIT, and Harvard</strong>.
          </p>
          <p>
            When I&apos;m not building, I&apos;m usually out with a camera, riding bikes through places
            I&apos;ve never been, or taking the slowest possible route home on foot. The long way is
            usually the better story.
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
            <span className="fact-label">Previously</span>
            <span className="fact-value">Machine Learning, Meta</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Expertise</span>
            <span className="fact-value">ML, Math, Tax Automation</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Company</span>
            <span className="fact-value">Kintsugi (CEO)</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Grew up in</span>
            <span className="fact-value">India · China · Dubai</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Unwind</span>
            <span className="fact-value">Photography · Biking · Hiking</span>
          </div>
        </div>
      </div>
    </section>
  )
}
