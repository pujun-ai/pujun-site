const photos = [
  {
    src: '/team-sakura-1.jpg',
    label: 'Sumida River · Tokyo',
    wide: true,
  },
  {
    src: '/team-ueno.jpg',
    label: 'Ueno Park · Tokyo',
    wide: false,
  },
  {
    src: '/team-shinjuku.jpg',
    label: 'Shinjuku Gyoen · Tokyo',
    wide: false,
  },
  {
    src: '/team-asakusa.jpg',
    label: 'Senso-ji · Asakusa',
    wide: true,
  },
  {
    src: '/team-meiji.jpg',
    label: 'Meiji Shrine · Tokyo',
    wide: false,
  },
]

export default function Photos() {
  return (
    <section className="photos-section" id="photos">
      <div className="section-label">Team <span className="section-label-jp">टीम</span></div>
      <h2 className="section-title" style={{ maxWidth: '600px' }}>
        The team that crossed an ocean.<br />
        <em>Sakura season. All of us.</em><br />
        The people who make it worth it.
      </h2>
      <div className="photo-grid">
        {photos.map((p, i) => (
          <div className={`photo-cell${p.wide ? ' photo-cell--wide' : ''}`} key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.label}
              className="photo-img"
              loading="lazy"
            />
            <div className="photo-label">{p.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
