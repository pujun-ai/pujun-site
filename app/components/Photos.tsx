import PeacockCorner from './PeacockCorner'
import FeatherBg from './FeatherBg'

export default function Photos() {
  return (
    <section className="photos-section" id="photos">
      <PeacockCorner />
      <FeatherBg />
      <div className="section-label">Team <span className="section-label-jp">टीम</span></div>
      <h2 className="section-title" style={{ maxWidth: '600px' }}>
        The team that crossed an ocean.<br />
        <em>Senso-ji. All of us.</em><br />
        The people who make it worth it.
      </h2>
      <div className="photo-grid">
        <div className="photo-cell photo-cell--wide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/team-sensoji.jpg"
            alt="Team at Senso-ji · Asakusa, Tokyo"
            className="photo-img"
            loading="lazy"
          />
          <div className="photo-label">Senso-ji · Asakusa, Tokyo</div>
        </div>
      </div>
    </section>
  )
}
