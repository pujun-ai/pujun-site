import PeacockCorner from './PeacockCorner'
import PeacockAccent from './PeacockAccent'
import FeatherBg from './FeatherBg'

const spots = [
  {
    area: 'NSP',
    full: 'Netaji Subhash Place',
    tag: 'Punjabi food',
    description:
      'The best Punjabi food in Delhi, full stop. Rich dal makhani, fresh tandoori roti, and the kind of warmth that makes you stay two hours longer than planned.',
    color: 'amber',
  },
  {
    area: 'Palika Bazaar',
    full: 'Palika Bazaar · Connaught Place',
    tag: 'Shopping',
    description:
      'Underground market madness right beneath CP. Labyrinthine, loud, and somehow you always find exactly what you weren\'t looking for. Bargaining is mandatory.',
    color: 'peacock',
  },
  {
    area: 'Connaught Place',
    full: 'CP · New Delhi',
    tag: 'Coffee',
    description:
      'Coffee and people-watching in the most beautiful colonial roundabout. There\'s nowhere else in the world quite like CP on a slow afternoon.',
    color: 'indigo',
  },
  {
    area: 'Deep Market',
    full: 'Lajpat Nagar · South Delhi',
    tag: 'Street food',
    description:
      'Chole bhature and pao bhaji done exactly right. No frills, no tourists — just some of the best street food Delhi has to offer.',
    color: 'amber',
  },
  {
    area: 'South Delhi Malls',
    full: 'Select City Walk · Ambience · DLF',
    tag: 'Leisure',
    description:
      'When the heat gets unbearable, South Delhi\'s malls become the city\'s living rooms. Great food courts, better people-watching, and blessed air conditioning.',
    color: 'peacock',
  },
]

export default function Delhi() {
  return (
    <section id="delhi" className="delhi-section">
      <PeacockCorner />
      <PeacockAccent mirror />
      <PeacockAccent className="pa-delhi-tl" />
      <FeatherBg />

      <div className="section-label">
        New Delhi <span className="section-label-jp">नई दिल्ली</span>
      </div>
      <h2 className="section-title">
        A city that feels<br /><em>like home.</em>
      </h2>
      <p className="delhi-intro">
        New Delhi is where I grew up and where part of me always lives. The chaos, the food,
        the heat, the history — there&apos;s nowhere else like it.
      </p>

      <div className="delhi-grid">
        {spots.map((spot, i) => (
          <div className="delhi-card" key={i}>
            <div className={`delhi-card-photo delhi-card-photo--${spot.color}`}>
              <span className="delhi-card-area">{spot.area}</span>
            </div>
            <div className="delhi-card-body">
              <div className="delhi-card-tag">{spot.tag}</div>
              <div className="delhi-card-name">{spot.full}</div>
              <p className="delhi-card-desc">{spot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
