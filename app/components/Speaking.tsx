const talks = [
  {
    year: '2025',
    title: 'The AI-Native Tax Stack: What\'s Coming Next',
    venue: 'CPA.com Advisory Panel',
  },
  {
    year: '2024',
    title: 'Sales Tax Compliance in 13,000 Jurisdictions',
    venue: 'TED-Style at CPA.com',
  },
  {
    year: '2024',
    title: 'Building at the Intersection of Law and Machine Learning',
    venue: 'Stanford GSB',
  },
  {
    year: '2023',
    title: 'From Zero to 500 Customers: The Kintsugi Story',
    venue: 'YC Demo Day',
  },
]

export default function Speaking() {
  return (
    <section id="speaking" className="speaking-section">
      <div className="section-label">Speaking</div>
      <h2 className="section-title">
        On stage &amp;<br /><em>on record.</em>
      </h2>
      <div className="speaking-list">
        {talks.map((talk, i) => (
          <div className="speaking-item" key={i}>
            <div className="speaking-year">{talk.year}</div>
            <div className="speaking-title">{talk.title}</div>
            <div className="speaking-venue">{talk.venue}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
