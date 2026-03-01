export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">
            Builder.<br /><em>Nerd.</em><br />Photographer.
          </h2>
          <p>
            I was shaped early by two people: my <strong>mother and my sister</strong>. They taught me
            to pay attention. To stay curious. To care about the details most people rush past.
          </p>
          <p>
            The first time I represented India at the <strong>International Mathematical Olympiad</strong>,
            something rewired in me. Competing at that level showed me what it feels like to operate at
            the frontier of human ability. It taught me how to sit with impossibly hard problems without
            flinching.
          </p>
          <p>
            I later returned home with a <strong>Gold Medal in Mathematics</strong> and a{' '}
            <strong>Silver Medal in Informatics</strong>. More important than the medals was the standard
            it set. Excellence became normal.
          </p>
          <p>
            At <strong>Stanford</strong>, I studied Artificial Intelligence and worked on intelligent
            tutoring systems and reproducible machine learning research. That work was later acquired by
            Microsoft and contributed to early foundations that helped seed <strong>OpenAI</strong>.
          </p>
          <p>
            After Stanford, I joined <strong>Facebook</strong> as the first machine learning engineer on
            the Stories team. I built ranking systems that became the backbone behind Instagram Stories,
            Facebook Stories, WhatsApp Stories, and Meta&apos;s unified story ranking. Billions of people
            used those systems daily.
          </p>
          <p>
            Today, I am the CEO and co-founder of <strong>Kintsugi</strong>. We are building the
            AI-native sales tax compliance platform for modern internet businesses. Sales tax is one of
            the most underestimated operational risks for founders. We automate compliance across
            13,000+ US jurisdictions so companies can scale without fear.
          </p>
          <p>
            Across math, research, big tech, and startups, the through-line has been the same:
            Find complex systems. Understand them deeply. Build leverage.
          </p>
          <p>
            When I am not building, I am usually walking through a city with a camera, riding my road
            bike across the Golden Gate, cooking, or obsessing over mechanical keyboards and fountain pens.
          </p>
          <p>
            I believe in intensity. I believe in craft. I believe in taking the long road.
          </p>
        </div>
        <div className="about-facts">
          <div className="fact-row">
            <span className="fact-label">Based in</span>
            <span className="fact-value">San Francisco, CA</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Grew up in</span>
            <span className="fact-value">India</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Undergrad</span>
            <span className="fact-value">Georgia Tech — Computer Engineering</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Minors</span>
            <span className="fact-value">CS · Mathematics · Art History · Music Theory</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Graduate</span>
            <span className="fact-value">Stanford MS CS (AI)</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Also Studied</span>
            <span className="fact-value">Harvard Business School (Did Not Graduate) · MIT (Lecturer)</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Gold Medal</span>
            <span className="fact-value">International Math Olympiad</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Silver Medal</span>
            <span className="fact-value">International Informatics Olympiad</span>
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
            <span className="fact-value">Photography · Road cycling · Cooking · Making Coffee · Collecting Pens · Building Keyboards</span>
          </div>
        </div>
      </div>

      <div className="about-mission-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/RoxieSF.jpg/800px-RoxieSF.jpg"
          alt="The Roxie Theater, Mission District, San Francisco"
          className="mission-img"
        />
        <div className="mission-img-label">Roxie Theater · Mission District, SF</div>
      </div>
    </section>
  )
}
