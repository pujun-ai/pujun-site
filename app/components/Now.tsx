const items = [
  { label: 'Listening',  value: 'Arijit Singh' },
  { label: 'Coffee',     value: 'Wrecking Ball SF — single origin pour over' },
  { label: 'Riding',     value: 'Marin Headlands loop on the Trek Domane' },
  { label: 'Pen',        value: 'TWSBI Eco T, Pilot Iroshizuku ink' },
  { label: 'Shooting',   value: 'Fujifilm X-T6 · Acros simulation' },
  { label: 'Reading',    value: 'What I Talk About When I Talk About Running — Murakami' },
]

import PeacockCorner from './PeacockCorner'
import FeatherBg from './FeatherBg'

export default function Now() {
  return (
    <section id="now" className="now-section">
      <PeacockCorner />
      <FeatherBg />
      <div className="section-label">
        Now <span className="section-label-jp">अभी</span>
      </div>
      <div className="now-list">
        {items.map((item, i) => (
          <div className="now-item" key={i}>
            <div className="now-item-label">{item.label}</div>
            <div className="now-item-value">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
