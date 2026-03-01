const photos = [
  { cls: 'p1', label: 'Tokyo — Shibuya, 2024', span: true },
  { cls: 'p2', label: 'SF — Mission District' },
  { cls: 'p3', label: 'Tokyo — Daikanyama' },
  { cls: 'p4', label: 'Tokyo — Harajuku' },
  { cls: 'p5', label: 'Kyoto — Arashiyama' },
]

export default function Photos() {
  return (
    <section className="photos-section" id="photos">
      <div className="section-label">Photography</div>
      <h2 className="section-title" style={{ maxWidth: '500px' }}>
        The world between<br /><em>the meetings.</em>
      </h2>
      <div className="photo-grid">
        {photos.map((p, i) => (
          <div className={`photo-cell${p.span ? '' : ''}`} key={i}>
            <div className={`photo-placeholder ${p.cls}`} style={{ height: '100%' }} />
            <div className="photo-label">{p.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
