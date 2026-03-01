const creds = [
  { label: 'Kintsugi', sub: 'CEO & Co-founder' },
  { label: 'Meta', sub: 'Machine Learning' },
  { label: 'Stanford', sub: 'MS Computer Science, AI' },
  { label: 'Georgia Tech', sub: 'BS, Computer Engineering' },
  { label: 'MIT', sub: 'Lecturer' },
  { label: 'Harvard Business School', sub: 'Did Not Graduate' },
]

export default function CredentialsBar() {
  return (
    <div className="credentials-bar">
      {creds.map((c, i) => (
        <div className="cred-item" key={i}>
          <div className="cred-dot" />
          <div className="cred-text">
            <strong>{c.label}</strong>, {c.sub}
          </div>
        </div>
      ))}
    </div>
  )
}
