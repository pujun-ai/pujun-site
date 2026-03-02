const items = [
  { label: 'Born', sub: 'India' },
  { label: 'Trained at', sub: 'Stanford' },
  { label: 'First ML Engineer at', sub: 'Facebook' },
  { label: 'Now', sub: 'CEO, Kintsugi' },
]

const hobbies = 'Cooking · Building keyboards'

export default function CredentialsBar() {
  return (
    <div className="credentials-bar">
      {items.map((c, i) => (
        <div className="cred-item" key={i}>
          <div className="cred-dot" />
          <div className="cred-text">
            <strong>{c.label}</strong>, {c.sub}
          </div>
        </div>
      ))}
      <div className="cred-item">
        <div className="cred-dot" />
        <div className="cred-text">{hobbies}</div>
      </div>
    </div>
  )
}
