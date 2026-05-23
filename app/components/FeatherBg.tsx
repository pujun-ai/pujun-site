export default function FeatherBg() {
  return (
    <div className="feather-bg" aria-hidden="true">
      <svg viewBox="0 0 120 420" xmlns="http://www.w3.org/2000/svg"
        fill="none" stroke="currentColor" strokeLinecap="round">

        {/* Eye — outer halo */}
        <ellipse cx="60" cy="75" rx="44" ry="52" strokeWidth="0.7" opacity="0.6" />
        <ellipse cx="60" cy="75" rx="32" ry="38" strokeWidth="0.6" opacity="0.5" />
        {/* Eye — inner ring */}
        <ellipse cx="60" cy="75" rx="20" ry="24" strokeWidth="0.9" />
        {/* Pupil */}
        <ellipse cx="60" cy="75" rx="9" ry="11" fill="currentColor" stroke="none" />

        {/* 8-petal rosette around eye */}
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const x1 = 60 + 23 * Math.sin(rad)
          const y1 = 75 - 28 * Math.cos(rad)
          const x2 = 60 + 38 * Math.sin(rad)
          const y2 = 75 - 46 * Math.cos(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.55" opacity="0.5" />
        })}

        {/* Central rachis */}
        <line x1="60" y1="125" x2="60" y2="410" strokeWidth="2.2" strokeLinecap="round" />

        {/* Barb pairs — upper (longer, dotted accents) */}
        {[140,158,176,194,212,230,248,266].map((y, i) => {
          const spread = 14 + i * 3.5
          const angle = 0.38 + i * 0.018
          return (
            <g key={i}>
              <line x1="60" y1={y} x2={60 - spread} y2={y - spread * angle} strokeWidth="0.75" />
              <line x1="60" y1={y} x2={60 + spread} y2={y - spread * angle} strokeWidth="0.75" />
              {i < 4 && <>
                <circle cx={60 - spread * 0.6} cy={y - spread * angle * 0.6} r="0.9" fill="currentColor" stroke="none" />
                <circle cx={60 + spread * 0.6} cy={y - spread * angle * 0.6} r="0.9" fill="currentColor" stroke="none" />
              </>}
            </g>
          )
        })}

        {/* Barb pairs — lower (shorter, herringbone) */}
        {[284,300,316,332,348,364,380,396].map((y, i) => {
          const spread = 44 - i * 4
          return (
            <g key={i}>
              <line x1="60" y1={y} x2={60 - spread} y2={y + 4} strokeWidth="0.65" />
              <line x1="60" y1={y} x2={60 + spread} y2={y + 4} strokeWidth="0.65" />
            </g>
          )
        })}

        {/* Quill diamonds */}
        {[306,330,354,378].map((y, i) => (
          <polygon key={i}
            points={`60,${y - 5} 63,${y} 60,${y + 5} 57,${y}`}
            fill="currentColor" stroke="none" opacity="0.4" />
        ))}

        {/* Base curl */}
        <path d="M60 408 Q52 415 56 420 Q60 416 64 420 Q68 415 60 408"
          strokeWidth="0.8" fill="none" />
      </svg>
    </div>
  )
}
