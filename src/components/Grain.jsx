import React from 'react'

// Lightweight animated noise/grain overlay — adds tactile, premium texture
// without shipping an image asset. Pure CSS + inline SVG filter.
export default function Grain() {
  return (
    <>
      <style>{`
        .grain-overlay {
          position: fixed;
          inset: 0;
          z-index: 9997;
          pointer-events: none;
          opacity: 0.035;
          mix-blend-mode: overlay;
        }
        .grain-overlay svg { width: 100%; height: 100%; }
        @media (prefers-reduced-motion: reduce) {
          .grain-overlay { display: none; }
        }
      `}</style>
      <div className="grain-overlay" aria-hidden="true">
        <svg>
          <filter id="ts-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#ts-grain)" />
        </svg>
      </div>
    </>
  )
}
