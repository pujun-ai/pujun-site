const links = [
  { label: 'Email', href: 'mailto:pujun@cs.stanford.edu' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pujun' },
  { label: 'Kintsugi', href: 'https://trykintsugi.com' },
]

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div>
        <div className="section-label">Contact <span className="section-label-jp">संपर्क</span></div>
        <h2 className="contact-title">
          For whatever reason.<br />Say hello.<br /><em>I read everything.</em>
        </h2>
      </div>
      <div className="contact-links">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="contact-link"
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span className="contact-link-label">{link.label}</span>
            <span className="contact-link-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  )
}
