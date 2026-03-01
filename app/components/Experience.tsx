const roles = [
  {
    period: '2021 — Present',
    title: 'CEO & Co-founder',
    company: 'Kintsugi',
    description:
      'Building the leading AI-native sales tax compliance platform for internet businesses. Grew from 0 to 610+ paying customers, automating compliance across 13,000+ US tax jurisdictions.',
    badge: 'Current',
  },
  {
    period: 'Pre-2021',
    title: 'Machine Learning Engineer',
    company: 'Meta (Facebook)',
    description:
      'Built and deployed machine learning systems at scale across Meta\'s infrastructure. Applied rigorous ML research to real-world product impact.',
    badge: 'Previous',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-label">Experience</div>
      <h2 className="section-title">
        Where I&apos;ve<br /><em>built things.</em>
      </h2>
      <div className="experience-list">
        {roles.map((role, i) => (
          <div className="experience-item" key={i}>
            <div className="experience-period">{role.period}</div>
            <div className="experience-body">
              <div className="experience-title">{role.title}</div>
              <div className="experience-company">{role.company}</div>
              <div className="experience-desc">{role.description}</div>
            </div>
            <div className="experience-badge">{role.badge}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
