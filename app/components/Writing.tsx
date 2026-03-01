const posts = [
  {
    tag: 'Startups',
    title: 'Why Sales Tax is the Most Underestimated Risk for SaaS Companies',
    excerpt:
      'Most founders discover their nexus problem the hard way. Here\'s what I wish I\'d known, and how we built Kintsugi to solve it.',
    date: 'Jan 2025',
    read: '8 min read',
  },
  {
    tag: 'AI & Tax',
    title: 'AI Won\'t Replace Tax Professionals. It\'ll Make Them Superhuman.',
    excerpt:
      'After speaking to hundreds of CPAs, I\'ve come to believe the threat narrative is completely wrong. Here\'s the real story.',
    date: 'Dec 2024',
    read: '6 min read',
  },
  {
    tag: 'Photography',
    title: 'Tokyo Through a Lens: Daikanyama, Shimokitazawa, and the Art of Slow Shopping',
    excerpt:
      'A week in Tokyo isn\'t about speed. It\'s about noticing. Some thoughts on cities, light, and finding beauty in the mundane.',
    date: 'Nov 2024',
    read: '5 min read',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="writing-section">
      <div className="writing-header">
        <div className="section-label">Writing</div>
        <h2 className="section-title">
          Ideas worth<br /><em>putting down.</em>
        </h2>
      </div>
      <div className="blog-grid">
        {posts.map((post, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-tag">{post.tag}</div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>{post.read}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
