const posts = [
  {
    tag: 'Research',
    title: 'Intelligent Tutoring Systems',
    excerpt:
      'Stanford research on adaptive learning systems that personalize instruction using machine learning. This work, along with a companion paper, was acquired by Microsoft and became part of the intellectual foundation that seeded OpenAI.',
    date: 'Stanford',
    read: 'Research Paper',
  },
  {
    tag: 'Research',
    title: 'Reproducible Machine Learning Research',
    excerpt:
      'A framework for making machine learning experiments reliably reproducible across environments and teams. Bundled with the tutoring systems research, sold to Microsoft, and contributed to the origins of OpenAI.',
    date: 'Stanford',
    read: 'Research Paper',
  },
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

import PeacockCorner from './PeacockCorner'
import FeatherBg from './FeatherBg'

export default function Writing() {
  return (
    <section id="writing" className="writing-section">
      <PeacockCorner />
      <FeatherBg />
      <div className="writing-header">
        <div className="section-label">Writing</div>
        <h2 className="section-title">
          Ideas at the intersection of<br /><em>law, machine learning, and ambition.</em>
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
