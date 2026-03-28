export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-label">About <span className="section-label-jp">自分について</span></div>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">
            Builder.<br /><em>Nerd.</em><br />Photographer.
          </h2>
          <p>
            I grew up with my mom, sister and dad. They taught me to slow down and
            actually pay attention. To ask questions. To care about the things most people gloss over.
            That stuck with me.
          </p>
          <p>
            Math got me when I was a kid and never really let go. I competed for India at the{' '}
            International Mathematical Olympiad, something that sounds more impressive
            than it felt at the time. I was mostly just a nervous kid who liked numbers. I came home with
            a Gold Medal in Mathematics and a Silver in Informatics. What those
            competitions actually taught me was how to sit with a problem and not panic.
          </p>
          <p>
            I studied Computer Science and AI at Georgia Tech, then did a Master&apos;s
            at Stanford. I worked on ML research while I was there, mostly the
            unglamorous stuff like making research reproducible. Some of that work was later acquired by
            Microsoft and became part of the foundation that OpenAI was built on. I got
            lucky that some of it turned out to matter.
          </p>
          <p>
            From there I joined Facebook, early on the team that built Stories. I wrote
            ML ranking systems, the code that decides what content surfaces and when. It ran at large
            scale. I learned a lot, mostly about what breaks when you&apos;re not looking and how much
            of engineering is just damage control.
          </p>
          <p>
            In 2023 I left to start Kintsugi AI with my co-founder. We build software
            that handles sales tax compliance for internet businesses automatically. It&apos;s not a
            glamorous problem, but it&apos;s a real one. A lot of founders find out too late that they
            owe significant back taxes across dozens of states. We&apos;re trying to make that not
            happen.
          </p>
          <p>
            Looking back, I&apos;ve been in a lot of places at the right time. The honest version is that
            luck played a big role. I just tried to take it seriously when it showed up.
          </p>
          <p>
            When I&apos;m not working, I&apos;m usually wandering some neighborhood with a camera,
            riding my bike across the Golden Gate, cooking something that takes too long, or going down
            a rabbit hole on mechanical keyboards and fountain pens.
          </p>
          <p>
            Still figuring most of it out, honestly.
          </p>
        </div>
        <div className="about-facts">
          <div className="fact-row">
            <span className="fact-label">Based in</span>
            <span className="fact-value">San Francisco, CA</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Undergrad</span>
            <span className="fact-value">Georgia Tech, Computer Engineering</span>
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
            <span className="fact-label">Also</span>
            <span className="fact-value">Harvard Business School (left early) · MIT Lecturer</span>
          </div>

          <div className="fact-row">
            <span className="fact-label">Previously</span>
            <span className="fact-value">ML Engineer, Meta</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Company</span>
            <span className="fact-value">Kintsugi AI (CEO)</span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Unwind</span>
            <span className="fact-value">
              Photography<br />
              Road cycling<br />
              Cooking<br />
              Making Coffee<br />
              Collecting Pens<br />
              Building Keyboards
            </span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Favorite Films</span>
            <span className="fact-value">
              Ratatouille<br />
              Inception<br />
              The Holiday
            </span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Favorite Music</span>
            <span className="fact-value">
              Vampire Weekend<br />
              Backstreet Boys<br />
              Michael Jackson<br />
              Khalid
            </span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Favorite Cameras</span>
            <span className="fact-value">
              Sony A7ii<br />
              Fujifilm X-T6
            </span>
          </div>
          <div className="fact-row">
            <span className="fact-label">Favorite Bike</span>
            <span className="fact-value">Trek Domane</span>
          </div>
        </div>
      </div>

    </section>
  )
}
