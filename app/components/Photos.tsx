const photos = [
  {
    id: 'photo-1540959733332-eab4deabeeaf',
    label: 'Shibuya · Tokyo',
    wide: true,
  },
  {
    id: 'photo-1501594907352-04cda38ebc29',
    label: 'San Francisco',
    wide: false,
  },
  {
    id: 'photo-1588412079929-790b9f593d8e',
    label: 'Mission District · SF',
    wide: false,
  },
  {
    id: 'photo-1513407030348-c983a97b98d8',
    label: 'Tokyo',
    wide: false,
  },
  {
    id: 'photo-1528360983277-13d401cdc186',
    label: 'Harajuku · Tokyo',
    wide: false,
  },
  {
    id: 'photo-1536098561742-ca998e48cbcc',
    label: 'Tokyo',
    wide: true,
  },
  {
    id: 'photo-1503899036084-c55cdd92da26',
    label: 'Daikanyama · Tokyo',
    wide: false,
  },
  {
    id: 'photo-1493976040374-85c8e12f0c0e',
    label: 'Kyoto',
    wide: false,
  },
  {
    id: 'photo-1545569341-9eb8b30979d9',
    label: 'Arashiyama · Kyoto',
    wide: false,
  },
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
          <div className={`photo-cell${p.wide ? ' photo-cell--wide' : ''}`} key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://images.unsplash.com/${p.id}?w=1200&q=80&fit=crop`}
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
