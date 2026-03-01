const roles = [
  {
    period: '2021 to Present',
    title: 'CEO & Co-founder',
    company: 'Kintsugi',
    description:
      'Building the leading AI-native sales tax compliance platform for modern internet businesses, automating compliance across 13,000+ US tax jurisdictions so founders can focus on building, not filing.',
    badge: 'Current',
  },
  {
    period: '2018 to 2021',
    title: 'First ML Engineer & Senior Engineer',
    company: 'Meta (Facebook)',
    description:
      'The first machine learning person on the Facebook Stories Team. Built the ML systems that became the ranking backbone for Instagram Stories, Facebook Stories, WhatsApp Stories, and Meta\'s unified story ranking, reaching billions of people daily.',
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
