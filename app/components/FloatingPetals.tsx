'use client'

const petals = [
  { color: '#E65100', left: '4%',  delay: '0s',     duration: '22s', w: 10, h: 16 },
  { color: '#FFB300', left: '12%', delay: '4.5s',   duration: '26s', w: 8,  h: 13 },
  { color: '#00838F', left: '22%', delay: '8s',     duration: '20s', w: 12, h: 19 },
  { color: '#E65100', left: '34%', delay: '1.8s',   duration: '18s', w: 9,  h: 14 },
  { color: '#FFB300', left: '46%', delay: '6s',     duration: '28s', w: 11, h: 17 },
  { color: '#138808', left: '58%', delay: '11s',    duration: '23s', w: 8,  h: 13 },
  { color: '#E65100', left: '68%', delay: '2.5s',   duration: '21s', w: 10, h: 16 },
  { color: '#00838F', left: '78%', delay: '7.2s',   duration: '25s', w: 9,  h: 14 },
  { color: '#FFB300', left: '88%', delay: '13s',    duration: '19s', w: 11, h: 18 },
  { color: '#E65100', left: '95%', delay: '3.5s',   duration: '24s', w: 8,  h: 13 },
]

export default function FloatingPetals() {
  return (
    <div className="floating-petals" aria-hidden="true">
      {petals.map((p, i) => (
        <svg
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            color: p.color,
            width: p.w,
            height: p.h,
          }}
          viewBox="0 0 10 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lotus / mehndi petal shape */}
          <path d="M5 1 C8 4 9 10 5 15 C1 10 2 4 5 1Z"/>
        </svg>
      ))}
    </div>
  )
}
