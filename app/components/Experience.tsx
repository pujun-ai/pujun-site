const roles = [
  {
    period: '2021 – Present',
    title: 'CEO & Co-Founder',
    company: 'Kintsugi',
    description:
      'Building the leading AI-native sales tax compliance platform for modern internet businesses. Serving hundreds of companies navigating multi-state and global compliance.',
    badge: 'Current',
  },
  {
    period: '2012 – 2021',
    title: 'First ML Engineer & Senior Engineer',
    company: 'Meta (Facebook)',
    description:
      'Built the machine learning ranking systems that powered Stories across Instagram, Facebook, and WhatsApp, reaching billions of users daily.',
    badge: 'Previous',
  },
]

const education = [
  {
    institution: 'Stanford University',
    degree: 'MS Computer Science, Artificial Intelligence',
  },
  {
    institution: 'Georgia Tech',
    degree: 'BS Computer Engineering',
    detail: 'Minors: CS, Mathematics, Art History, Music Theory',
  },
  {
    institution: 'Harvard Business School',
    degree: 'Attended but dropped out',
  },
  {
    institution: 'MIT',
    degree: 'Lecturer and Williams Fellow',
    detail: 'Teaching optimization and data decision making to graduate students',
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

      <div className="section-label" style={{ marginTop: '3rem' }}>Education</div>
      <div className="experience-list">
        {education.map((edu, i) => (
          <div className="experience-item" key={i}>
            <div className="experience-period" style={{ minWidth: '160px' }}>{edu.institution}</div>
            <div className="experience-body">
              <div className="experience-title">{edu.degree}</div>
              {edu.detail && <div className="experience-desc">{edu.detail}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
