import React from 'react'

// Professional, abstract SVG cover art per project category — no stock photos needed,
// keeps everything on-brand with the site's ink/volt gradient system.
function GridPattern({ id }) {
  return (
    <>
      <defs>
        <pattern id={id} width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M 26 0 L 0 0 0 26" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </>
  )
}

function ConstructionCover() {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <GridPattern id="gridConstruction" />
      <g opacity="0.9" stroke="#0a0c05" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M60 210 L60 90 L110 60 L160 90 L160 210" />
        <path d="M60 130 L160 130" />
        <path d="M190 210 V70 M190 70 L340 70 M230 70 V210 M280 70 V210 M330 70 V210" />
        <path d="M230 130 H280 M280 160 H330 M230 180 H280" opacity="0.5" />
        <circle cx="110" cy="60" r="6" fill="#0a0c05" stroke="none" />
      </g>
      <g stroke="#0a0c05" strokeWidth="2.4" strokeLinecap="round">
        <path d="M300 200 L300 40 L365 40" fill="none" />
        <path d="M300 60 L340 60" />
        <rect x="292" y="196" width="16" height="10" rx="2" fill="#0a0c05" />
      </g>
    </svg>
  )
}

function FitnessCover() {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <GridPattern id="gridFitness" />
      <g stroke="#0a0c05" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.92">
        <path d="M70 130 H150" />
        <rect x="46" y="108" width="24" height="44" rx="6" fill="#0a0c05" stroke="none" />
        <rect x="150" y="108" width="24" height="44" rx="6" fill="#0a0c05" stroke="none" />
        <rect x="30" y="118" width="16" height="24" rx="4" fill="#0a0c05" stroke="none" />
        <rect x="174" y="118" width="16" height="24" rx="4" fill="#0a0c05" stroke="none" />
        <path d="M230 190 C 250 120, 300 100, 320 150 C 335 185, 300 210, 260 200" opacity="0.85" />
        <path d="M230 60 L250 100 M320 150 L350 130" opacity="0.6" />
      </g>
      <g fill="#0a0c05" opacity="0.85">
        <circle cx="235" cy="55" r="6" />
      </g>
    </svg>
  )
}

function CityCover() {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <GridPattern id="gridCity" />
      <g fill="#0a0c05" opacity="0.9">
        <rect x="40" y="120" width="34" height="100" />
        <rect x="84" y="90" width="30" height="130" />
        <rect x="124" y="140" width="26" height="80" />
        <rect x="160" y="70" width="36" height="150" />
        <rect x="206" y="110" width="28" height="110" />
        <rect x="244" y="50" width="34" height="170" />
        <rect x="288" y="130" width="26" height="90" />
        <rect x="324" y="95" width="30" height="125" />
      </g>
      <g stroke="rgba(8,9,11,0.55)" strokeWidth="1.4">
        <path d="M96 100 H104 M96 116 H104 M96 132 H104" />
        <path d="M172 90 H184 M172 108 H184 M172 126 H184 M172 144 H184" />
        <path d="M256 68 H268 M256 88 H268 M256 108 H268 M256 128 H268" />
      </g>
      <path d="M20 220 H380" stroke="#0a0c05" strokeWidth="3" strokeLinecap="round" />
      <circle cx="320" cy="55" r="16" fill="none" stroke="#0a0c05" strokeWidth="2.4" opacity="0.7" />
    </svg>
  )
}

function StockCover() {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <GridPattern id="gridStock" />
      <g opacity="0.25" stroke="#0a0c05" strokeWidth="1">
        <path d="M20 60 H380 M20 100 H380 M20 140 H380 M20 180 H380" />
      </g>
      {/* candlesticks */}
      <g stroke="#0a0c05" strokeWidth="2.2" strokeLinecap="round">
        <line x1="60" y1="90" x2="60" y2="150" />
        <line x1="95" y1="60" x2="95" y2="120" />
        <line x1="130" y1="100" x2="130" y2="170" />
        <line x1="165" y1="50" x2="165" y2="110" />
        <line x1="200" y1="80" x2="200" y2="160" />
        <line x1="235" y1="40" x2="235" y2="95" />
        <line x1="270" y1="70" x2="270" y2="150" />
      </g>
      <g fill="#0a0c05">
        <rect x="52" y="105" width="16" height="28" rx="2" />
        <rect x="87" y="75" width="16" height="26" rx="2" opacity="0.55" />
        <rect x="122" y="118" width="16" height="34" rx="2" />
        <rect x="157" y="62" width="16" height="30" rx="2" opacity="0.55" />
        <rect x="192" y="98" width="16" height="40" rx="2" />
        <rect x="227" y="52" width="16" height="26" rx="2" opacity="0.55" />
        <rect x="262" y="88" width="16" height="38" rx="2" />
      </g>
      {/* forecast/prediction line overlay */}
      <path
        d="M40 165 L95 120 L150 140 L200 95 L250 70 L300 55 L360 35"
        fill="none"
        stroke="#0a0c05"
        strokeWidth="2.6"
        strokeDasharray="7 6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="360" cy="35" r="5.5" fill="#0a0c05" />
    </svg>
  )
}

const COVERS = {
  construction: ConstructionCover,
  fitness: FitnessCover,
  city: CityCover,
  stock: StockCover,
}

export default function ProjectCover({ type, grad }) {
  const Cover = COVERS[type] || StockCover
  return (
    <div className="project-cover" style={{ background: grad }}>
      <div className="project-cover-shine" />
      <Cover />
    </div>
  )
}
